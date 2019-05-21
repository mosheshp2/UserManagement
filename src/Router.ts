import * as express from 'express'
import UserController from './controllers/UsersController';

class Router {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router()
    
    router.post('/api/user', async (req, res) => {
      console.log(req);
      await UserController.create(req.body);

      res.json('User created');
    } );
    router.get('/api/user', async (req, res) => {
      const users = await UserController.getAll();

      res.json(users);
    } );

/// TODO:
//    router.get('/api/user/:id', UserController.getOne);
//    router.put('/api/user/:id', UserController.update);
//    router.delete('/api/user/:id', UserController.delete);
    
    router.get('/', (req, res) => {
         res.write('try GET /api/user');
    });

    this.express.use('/', router);
  }
}

export default new Router().express;