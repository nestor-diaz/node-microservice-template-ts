import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as health from 'express-ping';

import { useExpressServer } from 'routing-controllers';

export class ExpressConfig {
  app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(health.ping());

    this.setupControllersV1();
  }

  setupControllersV1() {
    const controllersPath = path.resolve('dist', 'controllers');

    useExpressServer(this.app, {
      routePrefix: "/api/v1",
      controllers: [ controllersPath ]
    });
  }
}
