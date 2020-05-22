import { expect } from 'chai';
import Auth from '../../../src/Services/Auth';
import AuthResponse from '../../../src/Interfaces/AuthResponse';
import Axios, { AxiosInstance } from 'axios';
import Config from '../../../src/Config/Config';
import nock from 'nock';
import User from '../../../src/Models/User';

describe('Auth@login', () => {
    const positive_authentication_response: AuthResponse = {
        status: {
            success: true,
            code: 200
        },
        data: {
            tokens: {
                access: 'access-token',
                refresh: 'refresh-token',
            },
            user: {
                _id: "user-id",
                first_name: "Test",
                last_name: "User",
                email: "test@example.com",
                is_active: true
            }
        }
    };

    it('should store user details and tokens', async () => {
        nock('http://api.xedi.com')
            .post('/1/auth', { email: 'test@example.com', password: 'my-password' })
            .reply(200, positive_authentication_response);

        const mock_config = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api.xedi.com/'
        });

        const auth_service = new Auth(mock_config, axios);

        await auth_service.login('test@example.com', 'my-password');

        expect(mock_config).to.have.keys('access_token', 'refresh_token').and
            .to.include('access-token').and
            .to.include('refresh-token');

        const user: User = Reflect.get(auth_service, '_user');

        expect(user).to.not.be.null;
    });
});
