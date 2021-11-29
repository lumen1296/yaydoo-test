import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '@modules/product/product.module';
import { ShopingCartModule } from '@modules/shoping-cart/shoping-cart.module';
import { UserModule } from '@modules/user/user.module';
import { OrderModule } from '@modules/order/order.module';
import { LoginModule } from '@modules/login/login.module';


@Module({
  imports: [ProductModule, ShopingCartModule, UserModule, LoginModule, OrderModule, ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      ssl: {
        rejectUnauthorized: false,
      },
      schema: process.env.DATABASE_SCHEMA
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}