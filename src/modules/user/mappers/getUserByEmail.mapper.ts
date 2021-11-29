import { User } from "@entities/User.entity";
import { UserDTO } from "@DTO/User.dto";


export const getUserByEmail = async (user: User): Promise<UserDTO> => {
  const userDTO : UserDTO ={
    id: user.id,
    email: user.email,
    password: user.password,
    enable: user.enable,
    createDate: user.createDate,
    updateDate: user.updateDate,
    roleId: user.roleId,
  };

  return userDTO;
}