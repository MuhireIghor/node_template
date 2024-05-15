export default class ApiResponse {
    message: any;
    data: any;
    success: boolean;
    constructor(message: string, data: any, success: boolean) {
        this.message = message;
        this.data = data;
        this.success = success;
    }
    static error(message: string, data: any) {
        return new ApiResponse(message, data, false);
    }
    static success(message: string, data: any) {
        return new ApiResponse(message, data, true);
    }

}