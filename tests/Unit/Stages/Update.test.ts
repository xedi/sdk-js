import JsonResponse from "../../../src/Interfaces/JsonResponse";
import Stage from "../../../src/Models/Stage";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Stages } from "../../../src/Services/Services";
import { assert } from "chai";
import WorkflowType from "../../../src/Enums/WorkflowType";
import State from "../../../src/Enums/State";

describe('Stages@update', () => {
    it('Should update a stage by id', async () => {
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
            .patch('/1/stages/stage-id')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const data: any = {
            stage: "updated stage name"
        };

        const stagesService = new Stages(mockConfig, axios);
        const response = await stagesService.update('stage-id', data);

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
