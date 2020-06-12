import JsonResponse from "../../../src/Interfaces/JsonResponse";
import Template from "../../../src/Models/Template";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Templates } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Templates@restore', () => {
    it('should restore an Template', async () => {
        const positiveResponse: JsonResponse<Template> = {
            status: {
                code: 201,
                success: true
            },
            data: {
                _id: "template-id",
                name: "test-template",
                description: "test-template",
                document_group_id: "test-document-id",
                is_template: false,
            }
        };

        nock('http://api-gateway.localhost')
            .put('/1/templates/template-id')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const TemplatesService = new Templates(mockConfig, axios);
        const response = await TemplatesService.restore('template-id');

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "template-id",
                name: "test-template",
                description: "test-template",
                document_group_id: "test-document-id",
                is_template: false,
            }
        );
    })
})
