import HttpResponse from '../../Interfaces/HttpResponse';

class MissingTokenError extends Error {
    private _response: HttpResponse<any>;

    constructor(response: HttpResponse<any>) {
        super('The token provided is invalid');
        Object.setPrototypeOf(this, Error.prototype);

        this._response = response;
    }

    get response(): HttpResponse<any> {
        return this._response;
    }
}

export default MissingTokenError;