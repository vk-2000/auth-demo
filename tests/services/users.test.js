const userService = require('../../src/services/users');
const { User } = require('../../src/models');

describe('user services', () => {
    describe('createUser', () => {
        it('should return a user', async () => {
            jest.spyOn(User, 'create').mockResolvedValue({
                id: 1,
                username: 'username',
                email: 'email'
            });
            const response = await userService.createUser({
                username: 'username',
                email: 'email',
                password: 'password'
            });
            expect(response).toEqual({
                id: 1,
                username: 'username',
                email: 'email'
            });
        });
    });
});