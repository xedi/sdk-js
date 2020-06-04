import JsonResponse from "../../../src/Interfaces/JsonResponse"
import { Templates } from "../../../src/Services/Services"
import Template from "../../../src/Models/Template"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { assert } from "chai";

describe('Template@update', () => {
    it('should update a template by id', async () => {
        const positiveResponse: JsonResponse<Template> = {
            status: {
                code: 201,
                success: true
            },
            data:
            {
                _id: "template-id",
                name: "test-template",
                description: "test-template",
                is_template: true,
            }
        };

        nock('http://api-gateway.localhost')
            .patch('/1/templates/template-id')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const data: any = {
            name: "template-updated",
        };

        const templatesService = new Templates(mockConfig, axios);
        const response = await templatesService.update('template-id', data);

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "template-id",
                name: "test-template",
                description: 'test-template',
                is_template: true,
            }
        );
    });
})
