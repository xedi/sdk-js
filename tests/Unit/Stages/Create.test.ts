import JsonResponse from "../../../src/Interfaces/JsonResponse"
import Stage from "../../../src/Models/Stage"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Stages } from "../../../src/Services/Services";
import { assert } from "chai";
import Xuid, {SupportedXuid} from "../../../src/Utils/Xuid";

describe('Transitions@create', () => {
    it('should create a transition', async () => {
        const positiveResponse: JsonResponse<Stage> = {
            status: {
                code: 201,
                success: true
            },
            data: {
                _id: "stage-id",
                from_id: "test-stage",
                to_id: 'test-stage',
                workflow_id: 'test-workflow',
                workflow_type: 'template',
                description: 'test-stage',
                is_automatic: false,

            }
        };

        nock('http://api-gateway.localhost')
            .post('/1/transitions')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const stage: Stage = {
            _id: "stage-id",
            from_id: "test-stage",
            to_id: 'test-stage',
            workflow_id: 'test-workflow',
            workflow_type: 'template',
            description: 'test-stage',
            is_automatic: false,
        }

        const transitionsService = new Stages(mockConfig, axios);
        const response = await transitionsService.create(stage);

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "stage-id",
                from_id: "test-stage",
                to_id: 'test-stage',
                workflow_id: 'test-workflow',
                workflow_type: 'template',
                description: 'test-stage',
                is_automatic: false,
            }
        );
    });
})
