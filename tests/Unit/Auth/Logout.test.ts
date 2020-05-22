import { expect } from 'chai';
import Auth from '../../../src/Services/Auth';
import Axios, { AxiosInstance } from 'axios';
import Business from '../../../src/Models/Business';
import Config from '../../../src/Config/Config';
import nock from 'nock';
import User from '../../../src/Models/User';

describe('Auth@logout', () => {
    it('should remove tokens and stored contexts', async() => {
        nock('http://api.xedi.com')
            .delete('/1/auth/token?refresh_token=refresh-token')
            .reply(200);

        const mock_config = new Config([
            [ 'access_token', 'access-token' ],
            [ 'refresh_token', 'refresh-token' ],
        ]);
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api.xedi.com/'
        });

        const auth_service = new Auth(mock_config, axios);
        Reflect.set(auth_service, '_user', ({} as User));
        Reflect.set(auth_service, '_business', ({} as Business));

        await auth_service.logout();

        const user: User = Reflect.get(auth_service, '_user');
        const business: Business = Reflect.get(auth_service, '_business');

        expect(user).to.be.null;
        expect(business).to.be.null;

        expect(mock_config).to.not.have.keys('access_token', 'refresh_token');
        expect(mock_config).to.not.include('access-token');
        expect(mock_config).to.not.include('refresh-token');
    });
});
