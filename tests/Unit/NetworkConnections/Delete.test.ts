import JsonResponse from "../../../src/Interfaces/JsonResponse"
import nock from "nock";
import Axios, { AxiosInstance } from "axios";
import Config from "../../../src/Config/Config";
import { NetworkConnections } from "../../../src/Services/Services";
import { assert } from "chai";
import NetworkConnection from "../../../src/Models/NetworkConnection";

describe('NetworkConnections@delete', () => {
    it('should delete a network connection by id', async () => {
        const positiveResponse: JsonResponse<object> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "networkconnection-id"
            }
        };

        nock('http://api-gateway.localhost')
            .delete('/1/networkconnections/networkconnection-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const networkconnectionsService = new NetworkConnections(mockConfig, axios);
        const response = await networkconnectionsService.delete('networkconnection-id');

        assert.isObject(response);
        assert.exists("networkconnection-id")
    })
})
