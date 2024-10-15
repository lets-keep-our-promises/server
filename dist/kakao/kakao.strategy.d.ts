import { ConfigService } from '@nestjs/config';
import { Profile, Strategy } from 'passport-kakao';
declare const KakaoStrategy_base: new (...args: any[]) => Strategy;
export declare class KakaoStrategy extends KakaoStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    authorizationParams(): {
        [key: string]: string;
    };
    validate(accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void): Promise<void>;
}
export {};
