# UserManagement
functional user management node.js server

# Usage:

run http requests to the following endpoints
GET:  /api/user   --------- (to get all users)
GET:  /api/user/:userId  -- (get specific user)
POST: /api/user          -- (create user)   
        <BODY: { userName: 'any string', firstName: 'any string' , lastName: 'any string', password: 'anyString' }> 
PUT:  /api/user/:userId  -- update user
         <BODY: { userName: 'any string', firstName: 'any string' , lastName: 'any string', password: 'anyString' }> 
DELETE: /api/user/:userId - delete user

# setup

```
git clone

npm start
```