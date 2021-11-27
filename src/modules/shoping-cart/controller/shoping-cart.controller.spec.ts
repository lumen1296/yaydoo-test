import { Test, TestingModule } from '@nestjs/testing';
import { ShopingCartController } from './shoping-cart.controller';

describe('ShopingCartController', () => {
  let controller: ShopingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopingCartController],
    }).compile();

    controller = module.get<ShopingCartController>(ShopingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
