import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class KakaoService {
    private readonly userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    kakaoLogin(req: Request): Promise<{
        success: boolean;
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: User;
        success?: undefined;
    }>;
    verifyKakaoToken(token: string): Promise<any>;
    refreshKakaoAccessToken(refreshToken: string): Promise<any>;
}
