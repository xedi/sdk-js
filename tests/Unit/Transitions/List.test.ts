import JsonResponse from "../../../src/Interfaces/JsonResponse"
import { Collection } from "../../../src/Models/Models"
import nock from "nock"
import Config from "../../../src/Config/Config"
import Axios, { AxiosInstance } from "axios"
import { assert } from "chai"
import Transitions from "../../../src/Services/Transitions"
import Transition from "../../../src/Models/Transition"
import WorkflowType from "../../../src/Enums/WorkflowType"

describe('Transitions@list', () => {
    it('should return a list of transitions', async () => {
        const positiveResponse: JsonResponse<Collection<Transition>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "transition-id",
                    from_id: "test-stage",
                    to_id: 'test-stage',
                    workflow_id: 'test-workflow',
                    workflow_type: WorkflowType.instance,
                    description: 'test-transition',
                    is_automatic: true,
                },
                {
                    _id: "transition-id",
                    from_id: "test-stage",
                    to_id: 'test-stage',
                    workflow_id: 'test-workflow',
                    workflow_type: WorkflowType.instance,
                    description: 'test-transition',
                    is_automatic: true,
                }
            ]
        };

        nock('http://api-gateway.localhost')
            .get('/1/transitions')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const transitionService = new Transitions(mockConfig, axios);
        const response = await transitionService.list({});

        assert.isArray(response);
        assert.lengthOf(response, 2);
    });
});
