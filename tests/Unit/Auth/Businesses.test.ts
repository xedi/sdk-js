import { expect } from 'chai';
import Axios from 'axios';
import Config from '../../../src/Config/Config';
import Auth from '../../../src/Services/Auth';
import Business from '../../../src/Models/Business';

describe('Auth@business', () => {
    it('should return and instance of the business', () => {
        const auth_service = new Auth(new Config(), Axios.create());
        Reflect.set(auth_service, '_business', ({} as Business));

        expect(auth_service.business).to.not.be.null;
    });
});