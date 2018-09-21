import { MainService } from '../../src/services/MainService';

describe('MainService', () => {
  let mainService: MainService;

  beforeEach(() => {
    mainService = new MainService();
  });

  test('should have a response when calling GET method', async () => {
    const getResult = await mainService.get();

    console.log(getResult);
  });
});
