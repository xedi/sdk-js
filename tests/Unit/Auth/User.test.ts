import { expect } from 'chai';
import Axios from 'axios';
import Config from '../../../src/Config/Config';
import Auth from '../../../src/Services/Auth';
import User from '../../../src/Models/User';

describe('Auth@user', () => {
    it('should return and instance of the user', () => {
        const authService = new Auth(new Config(), Axios.create());

        Reflect.set(authService, '_user', ({} as User));

        expect(authService.user).to.not.be.null;
    });
});
