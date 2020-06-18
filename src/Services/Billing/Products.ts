import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Product} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Products extends Service {

    /**
     * Get a product by its entity ID
     * @param entityId
     */
    getByEntity(entityId: string) {
        return this.client
            .get<JsonResponse<Product>>(`api/functional/product/${entityId}`)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response
            });
    }
}

export default Products;
