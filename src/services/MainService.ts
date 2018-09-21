import { ServiceInteface } from './ServiceInterface';
import { Service } from 'typedi';

@Service()
export class MainService implements ServiceInteface {
  get(): Promise<Object> {
    return Promise.resolve({ main: 'GET - Main Service' });
  }

  post(): Promise<Object> {
    return Promise.resolve({ main: 'POST - Main Service' });
  }

  put(): Promise<Object> {
    return Promise.resolve({ main: 'PUT - Main Service' });
  }

  delete(): Promise<Object> {
    return Promise.resolve({ main: 'DELETE - Main Service' });
  }
}
