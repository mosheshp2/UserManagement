const proxyquire = require('proxyquire');
 
var userService;
var storageMock;
var users;
beforeEach(() => {
    users=[];

    storageMock = jasmine.createSpyObj('storage', ['init', 'setItem', 'getItem']);

    var proxySrv = proxyquire('../../src/Model/UserService',   { 'node-persist': storageMock });
    userService = proxySrv.default;
});

describe('UserService', function() {
    it('getAllUsers returns users from storage', async function() {

        storageMock.getItem.and.callFake(() => JSON.stringify(users));
      
        const result = await userService.getAllUsers();
    
        expect(result).toEqual(users);
    });

    
});