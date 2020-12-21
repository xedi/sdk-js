import { assert } from 'chai';
import JsonResponse from "../../../src/Interfaces/JsonResponse";
import { Collection, Instance } from "../../../src/Models/Models";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { Files } from "../../../src/Services/Services";
import Xuid, { SupportedXuid } from '../../../src/Utils/Xuid';

interface ListParams extends Object
{
  page: number;
  type: string;
  business_id: Xuid<SupportedXuid.Business>;
  user_id: Xuid<SupportedXuid.User>;
  network_connection_id: string;
  network_configuration_id: string;
}

describe('Files@list', () => {
    it('should return a list of files' , async () => {
        const positiveResponse: JsonResponse<Collection<Instance>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "file-id-1",
                    internal_path: "test/path/1",
                    public_url: 'test-url',
                    owner_id: 'test-owner-id',
                    type: 'test',
                },
                {
                    _id: "file-id-2",
                    internal_path: "test/path/2",
                    public_url: 'test-url',
                    owner_id: 'test-owner-id',
                    type: 'test',
                }
            ]
        };

        const params: ListParams = {
            page: 1,
            type: 'test',
            business_id: 'business-id',
            user_id: 'user-id',
            network_connection_id: 'test-id',
            network_configuration_id: 'test-id',
        }

        nock('http://api-gateway.localhost')
            .get('/1/files')
            .query({
                page: 1,
                type: 'test',
                business_id: 'business-id',
                user_id: 'user-id',
                network_connection_id: 'test-id',
                network_configuration_id: 'test-id',
            })
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });


        const filesService = new Files(mockConfig, axios);
        const response = await filesService.list(params);

        assert.isArray(response);
        assert.lengthOf(response, 2);
    });
})
