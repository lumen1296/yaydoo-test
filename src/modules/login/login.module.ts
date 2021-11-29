import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { AuthModule } from '@modules/auth/auth.module';
import { ShopingCartModule } from '@modules/shoping-cart/shoping-cart.module';


@Module({
    imports: [AuthModule, ShopingCartModule],
    controllers: [LoginController]
})
export class LoginModule {}
