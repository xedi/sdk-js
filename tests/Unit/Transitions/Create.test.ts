import JsonResponse from "../../../src/Interfaces/JsonResponse"
import Transition from "../../../src/Models/Transition"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Transitions } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Transitions@create', () => {
    it('should create a transition', async () => {
        const positiveResponse: JsonResponse<Transition> = {
            status: {
                code: 201,
                success: true
            },
            data: {
                _id: "transition-id",
                from_id: "test-stage",
                to_id: 'test-stage',
                workflow_id: 'test-workflow',
                workflow_type: 'template',
                description: 'test-transition',
                is_automatic: true,
            }
        };

        nock('http://api-gateway.localhost')
            .post('/1/transitions')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const transition: Transition = {
            _id: "transition-id",
            from_id: "test-stage",
            to_id: 'test-stage',
            workflow_id: 'test-workflow',
            workflow_type: 'template',
            description: 'test-transition',
            is_automatic: true,
        }

        const transitionsService = new Transitions(mockConfig, axios);
        const response = await transitionsService.create(transition);

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
