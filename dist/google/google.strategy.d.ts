import { ConfigService } from '@nestjs/config';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
declare const GoogleStratagy_base: new (...args: any[]) => Strategy;
export declare class GoogleStratagy extends GoogleStratagy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    authorizationParams(): {
        [key: string]: string;
    };
    validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<void>;
}
export {};
