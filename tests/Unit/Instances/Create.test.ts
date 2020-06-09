import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Axios, { AxiosInstance } from "axios";
import Config from "../../../src/Config/Config";
import { assert } from "chai";
import Instance from "../../../src/Models/Instance";
import Instances from "../../../src/Services/Instances";

describe('Instances@create', () => {
    it('should create a instance', async () => {
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
            .post('/1/instances')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const instance: Instance = {
            _id: "instance-id",
            name: "test-instance",
            description: "test-instance",
            document_group_id: "test-document-id",
            is_template: false,
        };

        const instancesService = new Instances(mockConfig, axios);
        const response = await instancesService.create(instance);
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
    });
})
