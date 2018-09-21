import { ExpressConfig } from './ExpressConfig';
import * as config from 'config';

export class Microservice {
  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();

    const port: number = config.get('express.port');

    // Start Webserver
    this.server = this.express.app.listen(port, () => {
      console.info(`Microservice listen at: http://localhost:${port}`);
    });
  }
}
