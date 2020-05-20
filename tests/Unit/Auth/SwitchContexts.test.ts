import { expect } from 'chai';
import Auth from '../../../src/Services/Auth';
import AuthResponse from '../../../src/Interfaces/AuthResponse';
import Axios, { AxiosInstance } from 'axios';
import Business from '../../../src/Models/Business';
import Config from '../../../src/Config/Config';
import nock from 'nock';
import User from '../../../src/Models/User';

describe('Auth@switchContexts', () => {
    const positive_response: AuthResponse = {
        status: {
            code: 200,
            success: true
        },
        data: {
            tokens: {
                access: 'new-access-token',
                refresh: 'new-refresh-token',
            },
            user: {
                _id: "user-id",
                first_name: "Test",
                last_name: "User",
                email: "test@example.com",
                is_active: true
            },
            business: {
                _id: "business-uuid",
                business_name: "Business"
            }
        }
    };

    it('should update the store tokens and contexts', async () => {
        nock('http://api.xedi.com')
            .patch('/1/auth/token', { business_uuid: 'business-uuid' })
            .reply(200, positive_response);

        const mock_config = new Config([
            [ 'access_token', 'og-access-token' ],
            [ 'refresh_token', 'og-refresh-token' ],
        ]);

        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api.xedi.com/'
        });

        const auth_service = new Auth(mock_config, axios);

        await auth_service.switchContexts('business-uuid');

        expect(mock_config).to.have.keys('access', 'refresh_token');
        expect(mock_config.get('access')).to.equal('new-access-token');
        expect(mock_config.get('refresh')).to.equal('new-refresh-token');

        const user: User = Reflect.get(auth_service, '_user');
        const business: Business = Reflect.get(auth_service, '_business');

        expect(user).to.not.be.null;
        expect(business).to.not.be.null;
    });
});
