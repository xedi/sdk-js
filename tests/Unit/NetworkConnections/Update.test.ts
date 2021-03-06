import JsonResponse from "../../../src/Interfaces/JsonResponse";
import NetworkConnection from "../../../src/Models/NetworkConnection";
import nock from "nock";
import Config from "../../../src/Config/Config";
import Axios, { AxiosInstance } from "axios";
import { NetworkConnections } from "../../../src/Services/Services";
import { assert } from "chai";

describe('NetworkConnections@update', () => {
    it('Should update a networkconnection by id', async () => {
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
                network_status: 'pending',
                connection_type: 'FTP'
            }
        };

        nock('http://api-gateway.localhost')
            .patch('/1/networkconnections/networkconnection-id')
            .reply(201, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const data: any = {
            network_status: "active"
        };

        const networkconnectionsService = new NetworkConnections(mockConfig, axios);
        const response = await networkconnectionsService.update('networkconnection-id', data);

        assert.isObject(response);
        assert.deepEqual(
            response,
            {
                _id: "networkConnection-id",
                partnership_id: "test-partnetship-id",
                to_mailbox: "test-mailbox",
                from_mailbox: 'test-mailbox',
                network_status: 'pending',
                connection_type: 'FTP'
            }
        );
    });
})
