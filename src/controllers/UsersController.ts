import User from '../Model/User';
import UserService from '../Model/UserService';

class UserController {
    public async create(user: User): Promise<boolean> {
        await UserService.addUser(user);

        return true;
    }

    public async getAll(): Promise<User[]> {
        return await UserService.getAllUsers();
    }

    public async getUser(userId: number): Promise<User> {
        return await UserService.getUser(userId);
    }

    
    public async updateUser(userId: number,user: User) {
        await UserService.updateUser(userId, user);
    }

    public async deleteUser(userId: number) {
        await UserService.deleteUser(userId);
    }

    
}


export default new UserController();