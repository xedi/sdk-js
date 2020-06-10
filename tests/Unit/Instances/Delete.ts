import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { assert } from "chai";
import { Instances } from "../../../src/Services/Services";

describe('Instances@delete', () => {
    it('should delete an Instance by id', async () => {
        const positiveResponse: JsonResponse<object> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "instance-id"
            }
        };

        nock('http://api-gateway.localhost')
            .delete('/1/instances/instance-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const instancesService = new Instances(mockConfig, axios);
        const response = await instancesService.delete('instance-id')

        assert.isObject(response);
    });
});
