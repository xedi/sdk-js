interface JsonResponse<T> extends Object {
    status: {
        success: boolean;
        code: number;
    },
    data: T,
}

export default JsonResponse;