import { assert } from 'chai';
import Users from '../../../src/Services/Users';
import Axios, { AxiosInstance } from 'axios';
import Config from '../../../src/Config/Config';
import nock from 'nock';
import User from '../../../src/Models/User';
import JsonResponse from '../../../src/Interfaces/JsonResponse';

describe('Users@get', () => {
    it('should return a user by id', async () => {
        const positiveResponse: JsonResponse<User> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "user-id",
                first_name: "Test",
                last_name: "Example",
                email: "test@example.com",
                is_active: true
            }
        };

        nock('http://api.xedi.com')
            .get('/1/users/user-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api.xedi.com'
        });

        const usersService = new Users(mockConfig, axios);
        const response = await usersService.get('user-id');

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "user-id",
                first_name: "Test",
                last_name: "Example",
                email: "test@example.com",
                is_active: true
            }
        );
    });
});
