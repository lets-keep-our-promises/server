"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
let GoogleService = class GoogleService {
    constructor(userService, configService) {
        this.userService = userService;
        this.configService = configService;
    }
    async googleLogin(req) {
        const user = req.user;
        const googleUser = await this.userService.getOneEmailByUser(user.email + ' ' + user.id, 'google');
        if (!user) {
            return {
                success: false,
                message: 'No user from google'
            };
        }
        if (googleUser) {
            await this.userService.updateUser(user.email + ' ' + user.id, {
                email: user.email + ' ' + user.id,
                name: user.name,
                profileUrl: user.profileUrl,
                updateAt: user.updateAt
            });
        }
        else {
            await this.userService.insertUser(user);
        }
        return {
            message: 'User information from google',
            user: user
        };
    }
    async verifyGoogleToken(token) {
        try {
            const response = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`);
            const tokenInfo = await response.json();
            if (tokenInfo.error) {
                throw new common_1.InternalServerErrorException('Google Token Validation Failed: ' + tokenInfo.error);
            }
            return tokenInfo;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Google Token Validation Failed');
        }
    }
    async refreshAccessToken(refreshToken) {
        const params = {
            client_id: this.configService.get('GOOGLE_CLIENT_ID'),
            refresh_token: refreshToken,
            grant_type: 'refresh_token'
        };
        const clientSecret = this.configService.get('GOOGLE_CLIENT_PW');
        if (clientSecret) {
            params.client_secret = clientSecret;
        }
        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(params)
        });
        const data = await response.json();
        if (data.error) {
            throw new common_1.NotAcceptableException({
                success: false,
                message: `구글 토큰 재발급에 실패했습니다: ${data.error}`
            });
        }
        return data;
    }
};
exports.GoogleService = GoogleService;
exports.GoogleService = GoogleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], GoogleService);
//# sourceMappingURL=google.service.js.map