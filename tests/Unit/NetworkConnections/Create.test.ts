import JsonResponse from "../../../src/Interfaces/JsonResponse"
import NetworkConnection from "../../../src/Models/NetworkConnection"
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import {  NetworkConnections} from "../../../src/Services/Services";
import { assert } from "chai";


describe('NetworkConnections@create', () => {
    it('should create a networkConnection', async () => {
        const positiveResponse: JsonResponse<NetworkConnection> = {
            status: {
                code: 201,
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
            .post('/1/networkConnections')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const networkConnection: NetworkConnection = {
            _id: "networkConnection-id",
            partnership_id: "test-partnetship-id",
            to_mailbox: "test-mailbox",
            from_mailbox: 'test-mailbox',
            network_status: 'active',
            connection_type: 'FTP'
        }

        const networkConnectionsService = new NetworkConnections(mockConfig, axios);
        const response = await networkConnectionsService.create(networkConnection);

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
})
