// @flow

import AbstractRouter from './AbstractRouter';

class HelloWorldRouter extends AbstractRouter {
  
  constructor() {
    super('GET', '/', false);
  }

  async content(request: Request): Promise<any> {
    return 'hello, world';
  }

}

export default new HelloWorldRouter().router;
