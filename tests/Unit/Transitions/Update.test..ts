import JsonResponse from "../../../src/Interfaces/JsonResponse";
import Transition from "../../../src/Models/Transition";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Transitions } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Transitions@update', () => {
    it('Should update a template by id', async () => {
        const positiveResponse: JsonResponse<Transition> = {
            status: {
                code: 201,
                success: true
            },
            data: {
                _id: "transition-id",
                from_id: "test-stage",
                to_id: "test-stage",
                workflow_id: "test-workflow",
                workflow_type: "template",
                description: "updated transition description",
                is_automatic: true,
            }
        };

        nock('http://api-gateway.localhost')
            .patch('/1/transitions/transition-id')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gatway.localhost'
        });

        const data: any = {
            description: "updated transition description"
        };

        const transitionsService = new Transitions(mockConfig, axios);
        const response = await transitionsService.update('transition-id', data);

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "transition-id",
                from_id: "test-stage",
                to_id: 'test-stage',
                workflow_id: 'test-workflow',
                workflow_type: 'template',
                description: 'test-transition',
                is_automatic: true,
            }
        );
    });
})
