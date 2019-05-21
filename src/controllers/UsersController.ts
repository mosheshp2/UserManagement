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
}


export default new UserController();