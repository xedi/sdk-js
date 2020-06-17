import { expect, assert } from 'chai';
import Container from '../../../../../src/Container/Container';
import Billing from '../../../../../src/Services/Billing/Container';
import Config from '../../../../../src/Config/Config';

describe('BillingContainer@constructor', () => {
    let OGContainer: Container;
    let OGConfig: Config;

    beforeEach(() => {
        OGConfig = new Config();

        OGContainer = new Container();
        OGContainer.setInstance(
            'config',
            OGConfig
        );
    });

    it('shares the config instance between the containers', () => {
        OGConfig.set('foo', 'bar');

        const BillingContainer = new Billing(OGContainer);
        const BillingInstances = Reflect.get(BillingContainer, 'instances');

        assert.isTrue(BillingInstances.has('config'));
        const BillingConfig = BillingInstances.get('config');

        expect(BillingConfig.get('foo'))
            .to.be.equal('bar');
    });
});
