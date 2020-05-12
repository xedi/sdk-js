declare class ExpiredTokenError extends Error
{
    constructor(response: Response);
    response: Response;
}

export default ExpiredTokenError;