import JsonResponse from "../../../src/Interfaces/JsonResponse";
import { Instance } from "../../../src/Models/Models";
import nock from "nock";
import Axios, { AxiosInstance } from "axios";
import { Instances } from "../../../src/Services/Services";
import { assert } from "chai";
import Config from "../../../src/Config/Config";

describe('Instances@run', () => {
    it('should restore an instance', async () => {
        const positiveResponse: JsonResponse<Instance> = {
            status: {
                code: 201,
                success: true
            },
            data: {
                _id: "instance-id",
                name: "test-instance",
                description: "test-instance",
                document_group_id: "test-document-id",
                is_template: false,
            }
        };

        nock('http://api-gateway.localhost')
            .put('/1/instances/run/instance-id')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const instancesService = new Instances(mockConfig, axios);
        const response = await instancesService.run('instance-id');

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "instance-id",
                name: "test-instance",
                description: "test-instance",
                document_group_id: "test-document-id",
                is_template: false,
            }
        );
    })
})
