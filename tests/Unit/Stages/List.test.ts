import JsonResponse from "../../../src/Interfaces/JsonResponse"
import { Collection } from "../../../src/Models/Models"
import {  Stages } from "../../../src/Services/Services"
import nock from "nock"
import Config from "../../../src/Config/Config"
import Axios, { AxiosInstance } from "axios"
import { assert } from "chai"
import WorkflowType from "../../../src/Enums/WorkflowType"
import State from "../../../src/Enums/State"

describe('Stages@list', () => {
    it('should return a list of stages', async () => {
        const positiveResponse: JsonResponse<Collection<Stages>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "stage-id",
                    name: "test-stage",
                    workflow_id: 'test-workflow',
                    document_type_id: 'test-document-id',
                    workflow_type: WorkflowType.instance,
                    state: State.pending
                },
                {
                    _id: "stage-id",
                    name: "test-stage",
                    workflow_id: 'test-workflow',
                    document_type_id: 'test-document-id',
                    workflow_type: WorkflowType.instance,
                    state: State.pending
                }
            ]
        };

        nock('http://api-gateway.localhost')
            .get('/1/stages')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const stagesService = new Stages(mockConfig, axios);
        const response = await stagesService.list({});

        assert.isArray(response);
        assert.lengthOf(response, 2);
    });
});
