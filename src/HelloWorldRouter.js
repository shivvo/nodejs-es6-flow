// @flow

import AbstractRouter from './AbstractRouter';

class HelloWorldRouter: AbstractRouter {
  
  constructor() {
    super('GET', '/');
  }

  async content(request: Request): Promise<any> {
    return 'hello, world';
  }

}
