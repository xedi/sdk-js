import { assert } from 'chai';
import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Templates } from "../../../src/Services/Services";
import Template from '../../../src/Models/Template';

describe('Templates@get', () => {
    it('should return a template by id', async () => {
        const positiveResponse: JsonResponse<Template> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "template-id",
                name: "test-template",
                description: 'test-template',
                is_template: true,
            }
        };

        nock('http://api-gateway.localhost')
            .get('/1/templates/template-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const templatesService = new Templates(mockConfig, axios);
        const response = await templatesService.get('template-id');

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
});
