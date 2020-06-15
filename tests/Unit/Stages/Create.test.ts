import JsonResponse from "../../../src/Interfaces/JsonResponse"
import Stage from "../../../src/Models/Stage"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Stages } from "../../../src/Services/Services";
import { assert } from "chai";
import Xuid, {SupportedXuid} from "../../../src/Utils/Xuid";
import State from "../../../src/Enums/State";
import WorkflowType from "../../../src/Enums/WorkflowType";

describe('Stages@create', () => {
    it('should create a stage', async () => {
        const positiveResponse: JsonResponse<Stage> = {
            status: {
                code: 201,
                success: true
            },
            data: {
                _id: "stage-id",
                name: "test-stage",
                workflow_id: 'test-workflow',
                document_type_id: 'test-document-id',
                workflow_type: WorkflowType.instance,
                state: State.pending
            }
        };

        nock('http://api-gateway.localhost')
            .post('/1/stages')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const stage: Stage = {
            _id: "stage-id",
            name: "test-stage",
            workflow_id: 'test-workflow',
            document_type_id: 'test-document-id',
            workflow_type: WorkflowType.instance,
            state: State.pending
        }

        const stagesService = new Stages(mockConfig, axios);
        const response = await stagesService.create(stage);

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "stage-id",
                name: "test-stage",
                workflow_id: 'test-workflow',
                document_type_id: 'test-document-id',
                workflow_type: WorkflowType.instance,
                state: State.pending
            }
        );
    });
})
