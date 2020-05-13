import { expect } from 'chai';
import Container from '../../../src/Container/Container';

describe('Container@singleton', () => {
    it ('stores a callable in the bindings map', () => {
        const container = new Container;

        container.singleton('test', () => {});
        
        const bindings = Reflect.get(container, 'bindings');

        expect(bindings.has('test')).to.be.true;
    });
});