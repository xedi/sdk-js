import { expect } from 'chai';
import Container, { FactoryFunction } from '../../../src/Container/Container';
import ContainerInterface from '../../../src/Interfaces/Container';
import Config from '../../../src/Interfaces/Config';

describe('Container@resolve', () => {
    it('return undefined if a binding does not exist', () => {
        const container = new Container();
        const result = container.resolve('test');

        expect(result).to.be.undefined;
    });

    it('resolves an instance from a callable', () => {
        let hasRun = false;
        const container = new Container();

        Reflect.set(
            container,
            'bindings',
            new Map<string, FactoryFunction>([
                [
                    'test',
                    (app: ContainerInterface, config: Config): object => {
                        hasRun = true;

                        return {};
                    }
                ]
            ])
        );

        const result = container.resolve('test');

        expect(result).to.be.instanceOf(Object);
        expect(hasRun).to.be.true;

        const instances = Reflect.get(container, 'instances');
        expect(instances.has('test')).to.be.true;
        expect(instances.get('test')).to.be.instanceOf(Object);
    });

    it('returns already resolved instances', () => {
        const container = new Container();

        Reflect.set(
            container,
            'instances',
            new Map<string, object>([
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
