import { Controller, Get, Query, UseGuards} from '@nestjs/common';
import { UserService } from '@modules/user/services/user/user.service';
import JwtAuthenticationGuard from '@modules/auth/guards/jwt-authentication.guard';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
      ) {}
      
      @UseGuards(JwtAuthenticationGuard)
      @Get('getUserByEmail/:email')
      getUserByEmail(@Query('email') email: string) {
        return this.userService.getUserByEmail(email);
      }
    
}
