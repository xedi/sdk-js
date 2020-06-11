import { assert } from 'chai';
import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Instances } from "../../../src/Services/Services";
import Instance from '../../../src/Models/Instance';

describe('Instance@get', () => {
    it('should return an instance by id', async () => {
        const positiveResponse: JsonResponse<Instance> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "instance-id",
                name: "test-instance",
                description: "test-instance",
                is_template: false,
            }
        };

        nock('http://api-gateway.localhost')
            .get('/1/instances/instance-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const instancesService = new Instances(mockConfig, axios);
        const response = await instancesService.get('instance-id');

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "instance-id",
                name: "test-instance",
                description: 'test-instance',
                is_template: false,
            }
        );
    });
});
