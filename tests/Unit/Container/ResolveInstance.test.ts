import { expect } from 'chai';
import Container from '../../../src/Container/Container';

describe('Container::resolveInstance', () => {
    it('returns an instance of the container', () => {
        const result = Container.resolveInstance();

        expect(result).to.be.instanceOf(Container);
    });

    it('returns a singleton instance of the container', () => {
        const presetContainer = new Container();
        Reflect.set(Container, 'instance', presetContainer);
        const result = Container.resolveInstance();

        expect(result).to.be.equal(presetContainer);
    });

    afterEach(() => {
        Reflect.set(Container, 'instance', null);
    });
});
