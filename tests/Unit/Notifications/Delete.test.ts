import Axios, { AxiosInstance } from "axios";
import { assert } from "chai";
import nock from "nock";
import Config from "../../../src/Config/Config";
import JsonResponse from "../../../src/Interfaces/JsonResponse"
import {Notifications}  from "../../../src/Services/Services";


describe('Notifications@delete', () => {
    it('should delete a notification by id', async () => {
        const positiveResponse: JsonResponse<object> = {
            status: {
                code: 200,
                success: true
            },
            data: {
                _id:"notification-id"
            }
        };

        nock('http://messaging.localhost')
            .delete('/1/notifications/notification-id')
            .reply(200, positiveResponse);

        const mockConfig = new Config();
        const axios: AxiosInstance = Axios.create({
            baseURL: 'http://messaging.localhost'
        });

        const notificationsService = new Notifications(mockConfig, axios);
        const response = await notificationsService.delete('notification-id')

        assert.isObject(response);
    })
})