import Service from './Service';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import { Product, Collection } from '../Models/Models';
import { AxiosResponse } from 'axios';

/**
 * Products
 */
class Products extends Service
{
    /**
     * Lists products
     * @returns
     */
    list() {
        return this.client
            .get<JsonResponse<Collection<Product>>>(`1/products`)
            .then((response: AxiosResponse<JsonResponse<Collection<Product>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets by business
     * @param business_id
     * @returns
     */
    getByBusiness(business_id: Xuid<SupportedXuid.Business>)
    {
        return this.client
            .get<JsonResponse<Collection<Product>>>(`1/businesses/${ business_id }/products`)
            .then((response: AxiosResponse<JsonResponse<Collection<Product>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets products
     * @param product_id
     * @returns
     */
    get(product_id: Xuid<SupportedXuid.Product>) {
        return this.client
            .get<JsonResponse<Product>>(`1/products/${ product_id }`)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates products
     * @param product
     * @returns
     */
    create(product: Product) {
        return this.client
            .post<JsonResponse<Product>>(`1/products`)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data.data
            });
    }

    /**
     * Updates products
     * @param product
     * @returns
     */
    update(product: Product) {
        return this.client
            .patch<JsonResponse<Product>>(`1/products/${ product._id }`, product)
            .then((response: AxiosResponse<JsonResponse<Product>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes products
     * @param product_id
     * @returns
     */
    delete(product_id: Xuid<SupportedXuid.Product>) {
        return this.client
            .delete<JsonResponse<Boolean>>(`1/products/${ product_id }`)
            .then((response: AxiosResponse<JsonResponse<Boolean>>) => {
                return response;
            });
    }
}

export default Products;
