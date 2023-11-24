import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';
import { Role } from 'src/common/enums/role.enum';

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            username: 'john',
            password: 'width',
            roles: [Role.Admin]
        },
        {
            userId: 2,
            username: 'maria',
            password: 'otaga',
            roles: [Role.User]
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
