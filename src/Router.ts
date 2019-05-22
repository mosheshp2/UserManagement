import * as express from 'express'
import * as bodyParser from 'body-parser';
import UserController from './controllers/UsersController';

class Router {
  public express

  constructor () {
    this.express = express()
 
    this.express.use(bodyParser.json())
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router()
    
    router.post('/api/user', async (req, res) => {
        await UserController.create(req.body);

      res.json('User created');
    });

    router.get('/api/user', async (req, res) => {
      const users = await UserController.getAll();

      res.json(users);
    });

    router.get('/api/user/:userId',async (req, res) => {
      console.log(req.query);
      const user = await UserController.getUser(+req.params.userId);

      res.json(user);
    });
    
    router.put('/api/user/:userId', async (req, res) => {
      await UserController.updateUser(+req.params.userId, req.body);

      res.json('User updated');
    });
   
    router.delete('/api/user/:userId', async (req, res) => {
      await UserController.deleteUser(+req.params.userId);

      res.json('User deleted');
    
    });
    


    router.get('/', (req, res) => {
         res.write('try GET /api/user');
    });

    
    this.express.use('/', router);
  }
}

export default new Router().express;