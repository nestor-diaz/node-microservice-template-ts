import { JsonController, Get, Post, Put, Delete } from 'routing-controllers';
import { Inject } from 'typedi';
import { MainService } from '../services/MainService';

@JsonController('/main')
export class MainController {

  @Inject()
  mainService: MainService;

  @Get('/')
  async get(): Promise<Object> {
    return this.mainService.get();
  }

  @Post('/')
  async post(): Promise<Object> {
    return this.mainService.post();
  }

  @Put('/')
  async put(): Promise<Object> {
    return this.mainService.put();
  }

  @Delete('/')
  async delete(): Promise<Object> {
    return this.mainService.delete();
  }
}
