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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoController = void 0;
const common_1 = require("@nestjs/common");
const kakao_service_1 = require("./kakao.service");
const swagger_1 = require("@nestjs/swagger");
const kakao_guard_1 = require("./kakao.guard");
let KakaoController = class KakaoController {
    constructor(kakaoService) {
        this.kakaoService = kakaoService;
    }
    async kakaoLogin(res) { }
    async kakaoLoginCallback(req) {
        return await this.kakaoService.kakaoLogin(req);
    }
    async checkToken(req) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException({
                success: false,
                message: 'Authorization header missing'
            });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException({
                success: false,
                message: 'Token missing'
            });
        }
        const userInfo = await this.kakaoService.verifyKakaoToken(token);
        return {
            success: true,
            body: {
                userInfo
            }
        };
    }
    async refreshGoogleToken(req) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException({
                success: false,
                message: 'Authorization header missing'
            });
        }
        const refreshToken = authHeader.split(' ')[1];
        if (!refreshToken) {
            throw new common_1.UnauthorizedException({
                success: false,
                message: 'Refresh Token missing'
            });
        }
        const newTokenData = await this.kakaoService.refreshKakaoAccessToken(refreshToken);
        return {
            success: true,
            body: { newAccessToken: newTokenData.access_token }
        };
    }
};
exports.KakaoController = KakaoController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '카카오 로그인 요청',
        description: '카카오 로그인을 요청 합니다.'
    }),
    (0, common_1.Get)(''),
    (0, common_1.UseGuards)(kakao_guard_1.KakaoAuthGuard),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KakaoController.prototype, "kakaoLogin", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '카카오 로그인 콜백',
        description: '카카오 로그인 콜백을 처리하여 토큰을 리턴합니다.'
    }),
    (0, common_1.Get)('/callback'),
    (0, common_1.UseGuards)(kakao_guard_1.KakaoAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KakaoController.prototype, "kakaoLoginCallback", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '카카오 토큰 검증',
        description: '발급받은 토큰을 검증합니다.'
    }),
    (0, common_1.Get)('check_token'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KakaoController.prototype, "checkToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '카카오 토큰 재발급',
        description: '카카오 토큰을 갱신합니다.'
    }),
    (0, common_1.Get)('refresh'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KakaoController.prototype, "refreshGoogleToken", null);
exports.KakaoController = KakaoController = __decorate([
    (0, swagger_1.ApiTags)('Kakao_Auth'),
    (0, common_1.Controller)('auth/kakao'),
    __metadata("design:paramtypes", [kakao_service_1.KakaoService])
], KakaoController);
//# sourceMappingURL=kakao.controller.js.map