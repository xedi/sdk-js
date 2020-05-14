import { expect } from 'chai';
import Axios from 'axios';
import Config from '../../../src/Config/Config';
import Auth from '../../../src/Services/Auth';
import User from '../../../src/Models/User';

describe('Auth@user', () => {
    it('should return and instance of the user', () => {
        const auth_service = new Auth(new Config(), Axios.create());
        Reflect.set(auth_service, '_user', ({} as User));

        expect(auth_service.user).to.not.be.null;
    });
});