export interface UserDTO {
    id: number;
    name?: string;
    lastName?: string;
    email: string;
    password: string;
    enable: boolean;
    createDate: Date;
    updateDate: Date;
    roleId: number;
}