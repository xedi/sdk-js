import { assert } from 'chai';
import JsonResponse from "../../../src/Interfaces/JsonResponse";
import { Collection, Template } from "../../../src/Models/Models";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Templates } from "../../../src/Services/Services";

describe('Templates@list', () => {
    it('should return a list of templates' , async () => {
        const positiveResponse: JsonResponse<Collection<Template>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "template-id",
                    name: "test-template",
                    description: 'test-template',
                    template_id: undefined,
                    is_template: true,
                },
                {
                    _id: "template-id",
                    name: "test-template",
                    description: 'test-template',
                    template_id: undefined,
                    is_template: true,
                }
            ]
        };
    
        nock('http://api-gateway.localhost')
            .get('/1/templates')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const templatesService = new Templates(mockConfig, axios);
        
        const response = await templatesService.list();

        assert.isArray(response);
        assert.lengthOf(response, 2);
    });
})