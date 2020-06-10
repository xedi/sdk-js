import { assert } from 'chai';
import JsonResponse from "../../../src/Interfaces/JsonResponse";
import { Collection, Instance } from "../../../src/Models/Models";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Instances } from "../../../src/Services/Services";

describe('Instances@list', () => {
    it('should return a list of instances' , async () => {
        const positiveResponse: JsonResponse<Collection<Instance>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "instance-id-1",
                    name: "test-instance-1",
                    description: 'test-instance',
                    template_id: undefined,
                    is_template: false,
                },
                {
                    _id: "instance-id-2",
                    name: "test-instance-2",
                    description: 'test-template',
                    template_id: undefined,
                    is_template: false,
                }
            ]
        };

        nock('http://api-gateway.localhost')
            .get('/1/instances')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const templatesService = new Instances(mockConfig, axios);
        const response = await templatesService.list();

        assert.isArray(response);
        assert.lengthOf(response, 2);
    });
})
