import HttpResponse from '../../Interfaces/HttpResponse';

class ExpiredTokenError extends Error {
    private _response: HttpResponse<any>;

    constructor(response: HttpResponse<any>) {
        super('The access token has expired');
        Object.setPrototypeOf(this, Error.prototype);

        this._response = response;
    }

    get response(): HttpResponse<any> {
        return this._response;
    }
}

export default ExpiredTokenError;