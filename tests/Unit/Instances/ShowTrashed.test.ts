import JsonResponse from "../../../src/Interfaces/JsonResponse";
import { Instance, Collection } from "../../../src/Models/Models";
import nock from "nock/";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Instances } from "../../../src/Services/Services";
import { assert } from "chai";

describe('Instances@showTrashed' , () => {
    it('should return a list of trashed instances', async () => {
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
            .put('/1/instances/trashed')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const instancesService = new Instances(mockConfig, axios)
        const response = await instancesService.showTrashed();

        assert.isArray(response);
        assert.lengthOf(response, 2);
    })
});
