import { expect } from 'chai';
import Container from '../../../src/Container/Container';

describe('Container@hasBinding', () => {
    it('returns whether or not a binding is set', () => {
        const container = new Container();

        expect(container.hasBinding('test')).to.be.false;
        Reflect.set(
            container,
            'bindings',
            new Map<String, Function>([
                [ 'test', () => {} ]
            ])
        );

        expect(container.hasBinding('test')).to.be.true;
    });
});