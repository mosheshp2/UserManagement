import router from './Router'
import service from './Model/UserService';

const port = process.env.PORT || 3000

router.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
});

service.init();
