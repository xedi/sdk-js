import { expect } from 'chai';
import Axios from 'axios';
import Config from '../../../src/Config/Config';
import Auth from '../../../src/Services/Auth';
import Business from '../../../src/Models/Business';

describe('Auth@business', () => {
    it('should return and instance of the business', () => {
        const authService = new Auth(new Config(), Axios.create());
        Reflect.set(authService, '_business', ({} as Business));

        expect(authService.business).to.not.be.null;
    });
});
