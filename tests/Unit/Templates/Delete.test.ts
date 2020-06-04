import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { assert } from "chai";
import { Templates } from "../../../src/Services/Services";

describe('Templates@delete', () => {
    it('should delete a template bby id', async () => {
        const positiveResponse: JsonResponse<object> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "template-id"
            }
        };

        nock('http://api-gateway.localhost')
            .delete('/1/templates/template-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const templatesService = new Templates(mockConfig, axios);
        const response = await templatesService.delete('template-id')

        assert.isObject(response);
    });
});
