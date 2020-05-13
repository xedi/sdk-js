import { expect } from 'chai';
import Container from '../../../src/Container/Container';

describe('Container::resolveInstance', () => {
    it('returns an instance of the container', () => {
        const result = Container.resolveInstance();

        expect(result).to.be.instanceOf(Container);
    });

    it('returns a singleton instance of the container', () => {
        const preset_container = new Container;
        Reflect.set(Container, 'instance', preset_container);
        const result = Container.resolveInstance();

        expect(result).to.be.equal(preset_container);
    });

    afterEach(() => {
        Reflect.set(Container, 'instance', null);
    });
});