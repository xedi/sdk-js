type SearchResponse = String | undefined;

/**
 * Authenticate header
 */
class AuthenticateHeader
{
    /**
     * Header string of authenticate header
     */
    private readonly header_string: string;

    /**
     * Creates an instance of authenticate header.
     * @param header
     */
    constructor(header: string) {
        this.header_string = header;
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
     * Gets authenticate header
     * @param key
     * @returns get
     */
    get(key: string): SearchResponse {
        const result = (new RegExp(`${ key }=\"([a-z\_\ ]+)\"`, 'i'))
            .exec(this.header_string);

        if (result && result.length) {
            return result[1];
        }

        return undefined;
    }
}

export default AuthenticateHeader;
