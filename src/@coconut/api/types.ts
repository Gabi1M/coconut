export class ApiError extends Error {
    public status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export enum Headers {
    AUTHORIZATION = 'Authorization',
    CONTENT_TYPE = 'Content-Type',
}

export enum ContentType {
    APPLICATION_JSON = 'application/json',
    TEXT_PLAIN = 'test/plain',
    MULTIPART_FORM_DATA = 'multipart/form-data',
}
