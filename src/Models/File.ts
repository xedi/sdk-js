export default interface File extends Object {
    path: string,
    dirname: string,
    basename: string,
    extension: string,
    filename: string,
    timestamp: number,
    size: string,
    storageclass: string,
    etag: string,
    type: string,
    public_url: string
};
