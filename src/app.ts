import * as express from 'express';
import * as http from 'http';

//所有的组件都会实例化挂载到这个里面成为属性
export class Application {
    express = express();
    server = http.createServer(this.express);
}
//实例化一个app
export const app = new Application();