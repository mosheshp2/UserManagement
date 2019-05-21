import User from "./User";

const storage = require('node-persist');

class UserService {
    public async init(){
        
        console.log('starting init');
        await storage.init( /* options ... */ );
        await storage.setItem('users', []);

        console.log('storage inited');
    }

    public async addUser(user: User) {
        const users = await storage.getItem('users');
        users.push(user);

        await storage.setItem('users', users);
    }

    public async getAllUsers(): Promise<User[]> {
        return await storage.getItem('users');
    }
}

export default new UserService();