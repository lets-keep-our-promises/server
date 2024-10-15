import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';
export declare class GoogleService {
    private readonly userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    googleLogin(req: Request): Promise<{
        success: boolean;
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: User;
        success?: undefined;
    }>;
    verifyGoogleToken(token: string): Promise<any>;
    refreshAccessToken(refreshToken: string): Promise<any>;
}
