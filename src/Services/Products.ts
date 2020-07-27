import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Collection, Product} from '../Models/Models';
import {AxiosResponse} from 'axios';

/**
 * Products
 */
class Products extends Service {
    /**
     * Get by business
     * @param params
     * @returns <Promise>Product[]>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<Product>>>(`1/products`, {params})
            .then((response: AxiosResponse<JsonResponse<Collection<Product>>>) => {
                return response.data;
            });
    }

    /**
     * Gets products
     * @param productId
     * @returns Promise<Product>
     */
    get(productId: Xuid<SupportedXuid.Product>) {
        return this.client
            .get<JsonResponse<Product>>(`1/products/${productId}`)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates products
     * @param product
     * @returns Promise<Product>
     */
    create(product: Product) {
        return this.client
            .post<JsonResponse<Product>>(`1/products`, product)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data.data
            });
    }

    /**
     * Updates products
     * @param product
     * @returns Promise<Product>
     */
    update(product: Product) {
        return this.client
            .patch<JsonResponse<Product>>(`1/products/${product._id}`, product)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes products
     * @param productId
     * @returns Promise<Product>
     */
    delete(productId: Xuid<SupportedXuid.Product>) {
        return this.client
            .delete<JsonResponse<Product>>(`1/products/${productId}`)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response;
            });
    }
}

export default Products;
