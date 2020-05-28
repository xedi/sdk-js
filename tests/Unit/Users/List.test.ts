import { assert } from 'chai';
import Users from '../../../src/Services/Users';
import Axios, { AxiosInstance } from 'axios';
import Config from '../../../src/Config/Config';
import nock from 'nock';
import { Collection, User } from '../../../src/Models/Models';
import JsonResponse from '../../../src/Interfaces/JsonResponse';

describe('Users@list', () => {
    it('should return a list of users', async () => {
        const positiveResponse: JsonResponse<Collection<User>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "user-id",
                    first_name: "Test",
                    last_name: "Example",
                    email: "test@example.com",
                    is_active: true
                },
                {
                    _id: "user-id",
                    first_name: "Test",
                    last_name: "Example",
                    email: "test@example.com",
                    is_active: true
                }
            ]
        };

        nock('http://api.xedi.com')
            .get('/1/users')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api.xedi.com'
        });

        const usersService = new Users(mockConfig, axios);

        const response = await usersService.list();

        assert.isArray(response);
        assert.lengthOf(response, 2);
    });
});
