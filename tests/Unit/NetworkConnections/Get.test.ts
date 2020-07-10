import JsonResponse from "../../../src/Interfaces/JsonResponse"
import NetworkConnection from "../../../src/Models/NetworkConnection"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { NetworkConnections } from "../../../src/Services/Services";
import { assert } from "chai";


describe('NetworkConnections@get', () => {
    it('should return a networkconnection by id', async () => {
        const positiveResponse: JsonResponse<NetworkConnection> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id: "networkConnection-id",
                partnership_id: "test-partnetship-id",
                to_mailbox: "test-mailbox",
                from_mailbox: 'test-mailbox',
                network_status: 'active',
                connection_type: 'FTP'
            }
        };

        nock('http://api-gateway.localhost')
            .get('/1/networkconnections/networkconnection-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const networkconnectionsService = new NetworkConnections(mockConfig, axios);
        const response = await networkconnectionsService.get('networkconnection-id');

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "networkConnection-id",
                partnership_id: "test-partnetship-id",
                to_mailbox: "test-mailbox",
                from_mailbox: 'test-mailbox',
                network_status: 'active',
                connection_type: 'FTP'
            }
        );
    });
});
