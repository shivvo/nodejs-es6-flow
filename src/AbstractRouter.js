// @flow
import {Router, Request, Response, NextFunction} from 'express';

class AbstractRouter {
  
  router: Router;

  constructor(method: string, path: string) {
    if (!method) throw new Error("Must supply HTTP request method to AbstractRouter");
    if (!path) throw new Error("Must supply HTTP endpoint path to AbstractRouter");
    this.router = new Router();
    this.router[method.toLowerCase()](path, this.response);
  }
  
  async content(request: Request): Promise<any> {
    throw new Error("Must implement content() for AbstractRouter");
  }

  response = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const data = await content(request);
      response.send({success: true, data: data});
    } catch (err: Error) {
      response.send({success: false, error: err.message});
      throw err;
    }
  }
}

export default AbstractRouter;
