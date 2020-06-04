import JsonResponse from "../../../src/Interfaces/JsonResponse"
import { Template } from "../../../src/Models/Models"
import nock from "nock";
import Axios, { AxiosInstance } from "axios";
import Config from "../../../src/Config/Config";
import { Templates } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Templates@create', () => {
    it('should create a template', async () => {
        const positiveResponse: JsonResponse<Template> = {
            status: {
                code: 201,
                success: true
            },
            data: {
                _id: "template-id",
                name: "test-template",
                description: "test-template",
                is_template: true,
            }
        };

        nock('http://api-gateway.localhost')
            .post('/1/templates')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const template: Template = {
            _id: "template-id",
            name: "test-template",
            description: "test-template",
            is_template: true,
        };

        const templatesService = new Templates(mockConfig, axios);
        const response = await templatesService.create(template);
        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "template-id",
                name: "test-template",
                description: "test-template",
                is_template: true,
            }
        );
    });
})
