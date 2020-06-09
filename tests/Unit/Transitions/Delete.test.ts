import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Axios, { AxiosInstance } from "axios";
import Config from "../../../src/Config/Config";
import { Transitions } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Transistions@delete', () => {
    it('should delete a transition by id', async () => {
        const positiveResponse: JsonResponse<object> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "transition-id"
            }
        };

        nock('http://api-gateway.localhost')
            .delete('/1/transitions/transition-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const transitionsService = new Transitions(mockConfig, axios);
        const response = await transitionsService.delete('transition-id');

        assert.isObject(response);
    })
})
