import JsonResponse from "../../../src/Interfaces/JsonResponse"
import Stage from "../../../src/Models/Stage"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Stages } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Stages@get', () => {
    it('should return a stage by id', async () => {
        const positiveResponse: JsonResponse<Stage> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "stage-id",
                name: "test-stage",
                workflow_id: 'test-workflow',
                document_type_id: 'test-document-id',
                state: 'test-stage'
            }
        };

        nock('http://api-gateway.localhost')
            .get('/1/stages/stage-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const stagesService = new Stages(mockConfig, axios);
        const response = await stagesService.get('stage-id');

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "stage-id",
                name: "test-stage",
                workflow_id: 'test-workflow',
                document_type_id: 'test-document-id',
                state: 'test-stage'
            }
        );
    });
});
