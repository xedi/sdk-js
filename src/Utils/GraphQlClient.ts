import { AxiosInstance, AxiosResponse } from "axios";
import { ConfigInterface } from '../Interfaces/Config';

/**
 * Client for interacting with the GraphQL API
 */
class GraphQlClient
{
    /**
     * Instance of the Config Bag
     *
     * @var Config
     */
    private config: ConfigInterface;

    /**
     * Instance of the HTTP Client
     *
     * @var AxiosInstance
     */
    private client: AxiosInstance;

    /**
     * Creates an instance of GraphQl Client.
     * @param config
     * @param client
     */
    constructor(config: ConfigInterface, client: AxiosInstance)
    {
        this.config = config;
        this.client = client;
    }

    /**
     * Querys the Graph
     * @param query
     * @param [variables]
     * @param [headers]
     * @returns Promise
     */
    query(query: string, variables: object =  {}, headers: object = {})
    {
        return this.client
            .post('/graphql', { query, variables }, { headers })
            .then((response: AxiosResponse) => {
                return response.data.data;
            });
    }
}

export default GraphQlClient;
