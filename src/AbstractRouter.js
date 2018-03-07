// @flow
import {Router, Request, Response, NextFunction} from 'express';

type ExpressHandlerFunction = (Request, Response, NextFunction) => any;

class AbstractRouter {
  
  router: Router;
  wrapsResponse: boolean;

  constructor(method: string, path: string, wrapsResponse: boolean) {
    this.wrapsResponse = wrapsResponse;
    this.router = new Router();
    this.router[method.toLowerCase()](path, this.response());
  }
  
  async content(request: Request): Promise<any> {
    throw new Error("No implementation for AbstractRouter.content(Request)");
  }

  response(): ExpressHandlerFunction {
    return async (request: Request, response: Response, next: NextFunction) => {
      try {
        const data = await this.content(request);
        if (this.wrapsResponse) {
          response.send({success: true, data: data}); 
        } else {
          response.send(data);
        }
      } catch (err) {
        if (this.wrapsResponse) {
          response.send({success: false, error: err.message}); 
        } else {
          response.send(err.message);
        }
        throw err;
      }
    };
  }
}

export default AbstractRouter;
