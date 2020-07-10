import JsonResponse from "../../../src/Interfaces/JsonResponse"
import { Collection } from "../../../src/Models/Models"
import {  NetworkConnections } from "../../../src/Services/Services"
import nock from "nock"
import Config from "../../../src/Config/Config"
import Axios, { AxiosInstance } from "axios"
import { assert } from "chai"
import WorkflowType from "../../../src/Enums/WorkflowType"
import State from "../../../src/Enums/State"
import NetworkConnection from "../../../src/Models/NetworkConnection";

describe('NetworkConnections@list', () => {
    it('should return a list of networkconnections', async () => {
        const positiveResponse: JsonResponse<Collection<NetworkConnection>> = {
            status: {
                code: 200,
                success: true
            },
            data: [
                {
                    _id: "networkConnection-id",
                    partnership_id: "test-partnetship-id",
                    to_mailbox: "test-mailbox",
                    from_mailbox: 'test-mailbox',
                    network_status: 'active',
                    connection_type: 'FTP'
                },
                {
                    _id: "networkConnection-id-2",
                    partnership_id: "test-partnetship-id",
                    to_mailbox: "test-mailbox",
                    from_mailbox: 'test-mailbox',
                    network_status: 'active',
                    connection_type: 'FTP'
                }
            ]
        };

        nock('http://api-gateway.localhost')
            .get('/1/networkconnections')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://api-gateway.localhost'
        });

        const networkconnectionsService = new NetworkConnections(mockConfig, axios);
        const response = await networkconnectionsService.list();

        assert.isArray(response);
    });
});
