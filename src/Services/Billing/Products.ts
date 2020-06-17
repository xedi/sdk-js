import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Product} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Products extends Service {

    /**
     * Get a product by its entity ID
     * @param entity_id
     */
    getByEntity(entity_id: string) {
        return this.client
            .get<JsonResponse<Product>>(`api/functional/product/${entity_id}`)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response
            });
    }
}

export default Products;
