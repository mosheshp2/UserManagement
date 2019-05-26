import {default as User} from "./../../src/Model/User";
import * as btoa from 'btoa';

const proxyquire = require('proxyquire');
 
var userService;
var storageMock;
var users;
var userMock: User;

beforeEach(() => {
    users=[];
    userMock = new User();
    userMock.firstName = 'anyFirst';
    userMock.username = 'anyUsernME';
    userMock.password = 'Any password';

    storageMock = jasmine.createSpyObj('storage', ['init', 'setItem', 'getItem']);

    var proxySrv = proxyquire('../../src/Model/UserService',   { 'node-persist': storageMock });
    userService = proxySrv.default;
});

describe('UserService', () => {
    it('getAllUsers returns users from storage', async function() {

        storageMock.getItem.and.callFake(() => JSON.stringify(users));
      
        const result = await userService.getAllUsers();
    
        expect(result).toEqual(users);
    });

    it('addUser should add user to storage ', async () => {
        storageMock.getItem.and.callFake(() => JSON.stringify(users));
      
        await userService.addUser(userMock);
    
        
        userMock.password =  btoa(userMock.password);
        userMock.userId = 1;

        expect(storageMock.setItem).toHaveBeenCalledWith('users', JSON.stringify([userMock]));

    });
});