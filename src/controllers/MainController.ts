import { JsonController, Get, Param } from 'routing-controllers';

@JsonController('/main')
export class MainController {

  @Get('/')
  async get(): Promise<Object> {
    return Promise.resolve({ main: 'A message from main controller' });
  }
}
