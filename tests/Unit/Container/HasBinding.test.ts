import { expect } from 'chai';
import Container, { FactoryFunction } from '../../../src/Container/Container';
import ContainerInterface from '../../../src/Interfaces/Container';
import Config from '../../../src/Interfaces/Config';

describe('Container@hasBinding', () => {
    it('returns whether or not a binding is set', () => {
        const container = new Container();

        expect(container.hasBinding('test')).to.be.false;
        Reflect.set(
            container,
            'bindings',
            new Map<string, FactoryFunction>([
                [
                    'test',
                    (app: ContainerInterface, config: Config): object => {
                        return {};
                    }
                ]
            ])
        );

        expect(container.hasBinding('test')).to.be.true;
    });
});
