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

        const mockConfig = new Config([
            [ 'access_token', 'access-token' ],
            [ 'refresh_token', 'refresh-token' ],
        ]);
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api.xedi.com/'
        });

        const authService = new Auth(mockConfig, axios);
        Reflect.set(authService, '_user', ({} as User));
        Reflect.set(authService, '_business', ({} as Business));

        await authService.logout();

        const user: User = Reflect.get(authService, '_user');
        const business: Business = Reflect.get(authService, '_business');

        expect(user).to.be.null;
        expect(business).to.be.null;

        expect(mockConfig).to.not.have.keys('access_token', 'refresh_token');
        expect(mockConfig).to.not.include('access-token');
        expect(mockConfig).to.not.include('refresh-token');
    });
});
