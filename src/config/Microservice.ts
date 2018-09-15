import { ExpressConfig } from './ExpressConfig';
import * as config from 'config';

export class Microservice {
  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();

    const host: string = config.get('express.host');
    const port: number = config.get('express.port');

    // Start Webserver
    this.server = this.express.app.listen(port, host, () => {
      console.info(`Microservice listen at: http://localhost:${port}`);
    });
  }
}
