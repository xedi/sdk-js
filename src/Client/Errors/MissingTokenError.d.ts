declare class MissingTokenError extends Error
{
    constructor(response: Response);
    response: Response;
}

export default MissingTokenError;