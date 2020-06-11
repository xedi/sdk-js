import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Axios, { AxiosInstance } from "axios";
import Config from "../../../src/Config/Config";
import { Stages } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Stages@delete', () => {
    it('should delete a stage by id', async () => {
        const positiveResponse: JsonResponse<object> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "stage-id"
            }
        };

        nock('http://api-gateway.localhost')
            .delete('/1/stages/stage-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const stagesService = new Stages(mockConfig, axios);
        const response = await stagesService.delete('stage-id');

        assert.isObject(response);
    })
})
