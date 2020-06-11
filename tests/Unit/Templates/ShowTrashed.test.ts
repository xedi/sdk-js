import JsonResponse from "../../../src/Interfaces/JsonResponse";
import { Template, Collection } from "../../../src/Models/Models";
import nock from "nock/";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Templates } from "../../../src/Services/Services";
import { assert } from "chai";

describe('templates@showTrashed' , () => {
    it('should return a list of trashed templates', async () => {
        const positiveResponse: JsonResponse<Collection<Template>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "template-id-1",
                    name: "test-template-1",
                    description: 'test-template',
                    template_id: undefined,
                    is_template: false,
                },
                {
                    _id: "template-id-2",
                    name: "test-template-2",
                    description: 'test-template',
                    template_id: undefined,
                    is_template: false,
                }
            ]
        };

        nock('http://api-gateway.localhost')
            .get('/1/templates/trashed')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const templatesService = new Templates(mockConfig, axios)
        const response = await templatesService.showTrashed();

        assert.isArray(response);
        assert.lengthOf(response, 2);
    })
});
