import JsonResponse from "../../../src/Interfaces/JsonResponse";
import Instance from "../../../src/Models/Instance";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Instances } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Instances@restore', () => {
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
            .put('/1/instances/instance-id')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const instancesService = new Instances(mockConfig, axios);
        const response = await instancesService.restore('instance-id');

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
