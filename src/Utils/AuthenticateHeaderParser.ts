type SearchResponse = string | undefined;

/**
 * Authenticate header
 */
class AuthenticateHeader
{
    /**
     * Header string of authenticate header
     */
    private readonly headerString: string;

    /**
     * Creates an instance of authenticate header.
     * @param header
     */
    constructor(header: string) {
        this.headerString = header;
    }

    /**
     * Parses authenticate header
     * @param header
     * @returns parse
     */
    static parse(header: string): AuthenticateHeader
    {
        return new this(header);
    }

    /**
     * Gets error
     */
    get error()
    {
        return this.get('error');
    }

    /**
     * Gets realm
     */
    get realm()
    {
        return this.get('realm');
    }

    /**
     * Gets error description
     */
    get error_description()
    {
        return this.get('error_description');
    }

    /**
     * Gets claim
     */
    get claim()
    {
        return this.get('claim');
    }

    /**
     * Gets authenticate header
     * @param key
     * @returns get
     */
    get(key: string): SearchResponse {
        const result = (new RegExp(`${ key }=\"([a-z\_\.\ ]+)\"`, 'i'))
            .exec(this.headerString);

        if (result && result.length) {
            return result[1];
        }

        return undefined;
    }
}

export default AuthenticateHeader;
