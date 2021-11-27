import { Test, TestingModule } from '@nestjs/testing';
import { ShopingCartService } from './shoping-cart.service';

describe('ShopingCartService', () => {
  let service: ShopingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopingCartService],
    }).compile();

    service = module.get<ShopingCartService>(ShopingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
