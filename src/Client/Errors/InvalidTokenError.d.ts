declare class InvalidTokenError extends Error
{
    constructor(response: Response);
    response: Response;
}

export default InvalidTokenError;