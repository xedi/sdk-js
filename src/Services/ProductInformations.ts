import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Product} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Products
 */
class ProductInformations extends Service {
    /**
     * Get by business
     * @param params
     * @returns Promise<PaginatedJsonResponse<Product[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Product>>(`1/productInformation`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Product>>) => {
                return response.data;
            });
    }

    /**
     * Gets products
     * @param productId
     * @param config
     * @returns Promise<Product>
     */
    get(productId: Xuid<SupportedXuid.Product>, config: object) {
        return this.client
            .get<JsonResponse<Product>>(`1/productInformation/${productId}`, config)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data.data;
            });
    }


    /**
     * Creates products
     * @param product
     * @returns Promise<Product>
     */
    fillData(product: Product) {
        return this.client
            .post<JsonResponse<Product>>(`1/productInformation/fillData`, product)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data
            });
    }

    /**
     * Creates products
     * @param product
     * @returns Promise<Product>
     */
    create(product: Product) {
        return this.client
            .post<JsonResponse<Product>>(`1/productInformation`, product)
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
            .patch<JsonResponse<Product>>(`1/productInformation/${product._id}`, product)
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
            .delete<JsonResponse<Product>>(`1/productInformation/${productId}`)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response;
            });
    }
}

export default ProductInformations;
