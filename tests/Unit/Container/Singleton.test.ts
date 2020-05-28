import { expect } from 'chai';
import Container from '../../../src/Container/Container';
import ContainerInterface from '../../../src/Interfaces/Container';
import Config from '../../../src/Interfaces/Config';

describe('Container@singleton', () => {
    it ('stores a callable in the bindings map', () => {
        const container = new Container();

        container.singleton('test', (app: ContainerInterface, config: Config): object => {
            return {};
        });

        const bindings = Reflect.get(container, 'bindings');

        expect(bindings.has('test')).to.be.true;
    });
});
