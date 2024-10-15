import { KakaoService } from './kakao.service';
import { Request, Response } from 'express';
export declare class KakaoController {
    private readonly kakaoService;
    constructor(kakaoService: KakaoService);
    kakaoLogin(res: Response): Promise<void>;
    kakaoLoginCallback(req: Request): Promise<{
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
