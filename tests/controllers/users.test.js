const userController = require('../../src/controllers/users');
const usersService = require('../../src/services/users');

describe('User Controller', () => {
    describe('createUser', () => {
        it('should create a user', async () => {
            jest.spyOn(usersService, 'createUser').mockResolvedValue({ id: 1, username: 'username' });
            const req = {
                body: {
                    username: 'username',
                    password: 'password'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            await userController.createUser(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
        });
    });
});