import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {Collection, ScheduledJob} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Scheduleled Jobs
 */
class ScheduledJobs extends Service {
    /**
     * Lists Schedueled Jobs
     * @returns Promise<ScheduledJob[]>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<ScheduledJob>>>(`1/scheduledjobs`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<ScheduledJob>>>) => {
                return response.data;
            });
    }

    /**
     * Create Scheduled Job
     * @param scheduledJob
     */
    create(scheduledJob: ScheduledJob) {
        return this.client
            .post<JsonResponse<ScheduledJob>>(`1/scheduledjobs`, scheduledJob)
            .then((response: AxiosResponse<JsonResponse<ScheduledJob>>) => {
                return response.data;
            });
    }

    /**
     * Show a Schedueled Job by id
     * @returns Promise<ScheduledJob>
     */
    show(jobId: Xuid<SupportedXuid.ScheduledJob>) {
        return this.client
            .get<JsonResponse<ScheduledJob>>(`1/scheduledjobs/${jobId}`)
            .then((response: AxiosResponse<JsonResponse<ScheduledJob>>) => {
                return response.data;
            });
    }

    /**
     * Update a Schedueled Job
     * @returns Promise<ScheduledJob>
     */
    update(scheduledJob: ScheduledJob) {
        return this.client
            .patch<JsonResponse<ScheduledJob>>(`1/scheduledjobs/${scheduledJob._id}`, scheduledJob)
            .then((response: AxiosResponse<JsonResponse<ScheduledJob>>) => {
                return response.data;
            });
    }

    /**
     * Delete a Schedueled Job by id
     * @returns Promise<ScheduledJob>
     */
    delete(jobId: Xuid<SupportedXuid.ScheduledJob>) {
        return this.client
            .delete<JsonResponse<null>>(`1/scheduledjobs/${jobId}`)
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data;
            });
    }

}

export default ScheduledJobs;
