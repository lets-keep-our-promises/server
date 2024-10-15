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
exports.KakaoService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../user/user.service");
let KakaoService = class KakaoService {
    constructor(userService, configService) {
        this.userService = userService;
        this.configService = configService;
    }
    async kakaoLogin(req) {
        const user = req.user;
        const kakaoUser = await this.userService.getOneEmailByUser(user.email + ' ' + user.id, 'kakao');
        if (!user) {
            return {
                success: false,
                message: 'No user from Kakao'
            };
        }
        if (kakaoUser) {
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
            message: 'User information from Kakao',
            user: user
        };
    }
    async verifyKakaoToken(token) {
        try {
            const response = await fetch('https://kapi.kakao.com/v2/user/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const tokenInfo = await response.json();
            if (tokenInfo.code) {
                throw new common_1.InternalServerErrorException('Kakao Token Validation Failed: ' + tokenInfo.msg);
            }
            return tokenInfo;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Kakao Token Validation Failed');
        }
    }
    async refreshKakaoAccessToken(refreshToken) {
        const params = {
            grant_type: 'refresh_token',
            client_id: this.configService.get('KAKAO_RESTAPI_KEY'),
            refresh_token: refreshToken
        };
        const clientSecret = this.configService.get('KAKAO_CLIENT_PW');
        if (clientSecret) {
            params.client_secret = clientSecret;
        }
        const response = await fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(params)
        });
        const data = await response.json();
        if (data.error) {
            throw new common_1.NotAcceptableException({
                success: false,
                message: `카카오 토큰 재발급에 실패했습니다: ${data.error_description}`
            });
        }
        return data;
    }
};
exports.KakaoService = KakaoService;
exports.KakaoService = KakaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], KakaoService);
//# sourceMappingURL=kakao.service.js.map