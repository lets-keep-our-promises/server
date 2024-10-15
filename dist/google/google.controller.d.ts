import { Request, Response } from 'express';
import { GoogleService } from './google.service';
export declare class GoogleController {
    private readonly googleService;
    constructor(googleService: GoogleService);
    googleLogin(res: Response): Promise<void>;
    googleLoginCallback(req: Request): Promise<{
        success: boolean;
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: import("../user/entities/user.entity").User;
        success?: undefined;
    }>;
    checkToken(req: Request): Promise<{
        success: boolean;
        body: {
            userInfo: any;
        };
    }>;
    refreshGoogleToken(req: Request): Promise<{
        success: boolean;
        body: {
            newAccessToken: any;
        };
    }>;
}
