import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from '@DTO/User.dto';
import { getUserByEmail } from '@modules/user/mappers/getUserByEmail.mapper';
import { createUserOutputMapper } from '@modules/user/mappers/createUserOutput.mapper';
@Injectable()
export class UserService {


    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }


    async getUserByEmail(email: String): Promise<UserDTO> {

        const user = await this.userRepository.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new NotFoundException();
        }
        return Promise.resolve(await getUserByEmail(user));
    }

    async createUSer(userDTO: UserDTO): Promise<UserDTO> {
        const userSaved = await this.userRepository.save({
            name: userDTO.name,
            lastName: userDTO.lastName,
            email: userDTO.email,
            password: userDTO.password,
            enable: userDTO.enable,
            createDate: new Date(),
            updateDate: new Date(),
            roleId: userDTO.roleId,
        });
        return Promise.resolve(await createUserOutputMapper(userSaved));
      }

      async getUserById(id: number) {
        const user = await this.userRepository.findOne({ id });
        if (user) {
          return user;
        }
        throw new NotFoundException();;
      }

    
}
