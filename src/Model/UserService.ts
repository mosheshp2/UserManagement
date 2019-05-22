import User from "./User";
import * as btoa from 'btoa';
const storage = require('node-persist');

class UserService {
   
    public async addUser(user: User) {
        const users = JSON.parse(await storage.getItem('users'));
        
        let userId = this.generateId(users.length);
        
        users.push({ ...user, password: btoa(user.password), userId });

        await storage.setItem('users', JSON.stringify(users));
    }

    public async getAllUsers(): Promise<User[]> {
        return JSON.parse(await storage.getItem('users'));
    }

    public async updateUser(userId: number, user: User) {
        
        const users = await this.getAllUsers();
       
        const userIndex = users.findIndex(user => user.userId === userId);

        const updatedUsers = [
            ...users.slice(0, userIndex),
            {...user, password: btoa(user.password), userId },
            ...users.slice(userIndex + 1),
          ];
          
        await storage.setItem('users', JSON.stringify(updatedUsers));
    }

    public async getUser(userId: number): Promise<User> {
        const users = await this.getAllUsers();

        return users.filter(user => user.userId === userId)[0];
    }

    public async deleteUser(userId: number) {
        
        const users = await this.getAllUsers();
       
        const leftUsers = users.filter(user => user.userId !== userId);

        await storage.setItem('users', JSON.stringify(leftUsers));
    }

    public async init(){
        await storage.init();
        
        let shouldInit = true;

        try{
            const users = await storage.getItem('users');

            shouldInit = users == null || users.length === 0;
        }
        catch {
            console.log('no storage');
        }
    
        if(shouldInit){
            await storage.setItem('users', JSON.stringify([]));
            console.log('storage inited');
        }
    }

    generateId(length: number) :number {
        return length + 1; 
    }

}

export default new UserService();