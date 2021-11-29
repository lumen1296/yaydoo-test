import { Controller, Post, UseGuards, Body, Res, Req, Get } from '@nestjs/common';
import { UserDTO } from '@DTO/User.dto';
import { AuthService } from '@modules/auth/services/auth/auth.service';
import { LocalAuthGuard } from '@modules/auth/guards/local-auth.guard';
import { Response } from 'express';
import JwtAuthenticationGuard from '@modules/auth/guards/jwt-authentication.guard';
import { ApiBody } from '@nestjs/swagger';
import { ShoppingCartService } from '@modules/shoping-cart/service/shoping-cart.service';

@Controller('login')
export class LoginController {

  constructor(
    private readonly authService: AuthService,
    private readonly shoppingService: ShoppingCartService
  ) { }


  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  @ApiBody({
    schema: {
      properties: {
        'password': { type: 'string' },
        'email': { type: 'string' },
      }
    }
  })
  async login(@Req() req: any, @Res() response: Response) {
    const { user } = req;
    if (user.enable) {
      const cookie = this.authService.getCookieWithJwtToken(user.id);
      response.setHeader('Set-Cookie', cookie);
      user.password = undefined;

      this.shoppingService.createShoppingCart(user.id);
      return response.send(user);

    }

    return response.status(401).send({ "status": 401, "message": 'Inactived user' });
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('log-out')
  async logOut(@Req() req: any, @Res() response: Response) {
    response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
    return response.send({ res: "ok" });
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post()
  @ApiBody({
    schema: {
      properties: {
        'id': { type: 'number' },
        'name': { type: 'string' },
        'email': { type: 'string' },
      }
    }
  })
  authenticate(@Req() request: any, @Res() response: Response) {
    const user = request.user;
    user.password = undefined;
    return response.status(200).send({ "statusCode": 200 });
  }

  @UseGuards(LocalAuthGuard)
  @Post('sign-up')
  @ApiBody({
    schema: {
      properties: {
        'name': { type: 'string' },
        'email': { type: 'string' },
        'password': { type: 'string' },
        'enable': { type: 'boolean' },
        'lastName': { type: 'string' },
        'roleId': { type: 'number' },

      }
    }
  })
  async register(@Body() userDTO: UserDTO) {
    const responseSignUp = await this.authService.signUpUser(userDTO);

    return responseSignUp;
  }




}