import { expect } from 'chai';
import Container from '../../../src/Container/Container';

describe('Container@resolve', () => {
    it('return undefined if a binding does not exist', () => {
        const container = new Container();

        let result = container.resolve('test');
        expect(result).to.be.undefined;
    });

    it('resolves an instance from a callable', () => {
        let has_run = false;
        const container = new Container();

        Reflect.set(
            container,
            'bindings',
            new Map<String, Function>([
                [
                    'test',
                    () => {
                        has_run = true;

                        return true;
                    }
                ]
            ])
        );

        const result = container.resolve('test');

        expect(result).to.be.true;
        expect(has_run).to.be.true;

        const instances = Reflect.get(container, 'instances');
        expect(instances.has('test')).to.be.true;
        expect(instances.get('test')).to.be.true;
    });

    it('returns already resolved instances', () => {
        const container = new Container();

        Reflect.set(
            container,
            'instances',
            new Map<String, Object>([
                [
                    'test',
                    { foo: 'bar' }
                ]
            ])
        );

        const result = container.resolve('test');
        expect(result).to.have.key('foo');
    });
});