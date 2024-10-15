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
exports.GoogleController = void 0;
const common_1 = require("@nestjs/common");
const google_service_1 = require("./google.service");
const google_guard_1 = require("./google.guard");
const swagger_1 = require("@nestjs/swagger");
let GoogleController = class GoogleController {
    constructor(googleService) {
        this.googleService = googleService;
    }
    async googleLogin(res) { }
    async googleLoginCallback(req) {
        return await this.googleService.googleLogin(req);
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
        if (!token.startsWith('ya')) {
            throw new common_1.UnauthorizedException({
                success: false,
                message: '잘못된 토큰입니다.'
            });
        }
        const userInfo = await this.googleService.verifyGoogleToken(token);
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
        if (refreshToken.startsWith('ya')) {
            throw new common_1.UnauthorizedException({
                success: false,
                message: '토큰 재발급은 Refresh토큰으로만 가능합니다.'
            });
        }
        const newTokenData = await this.googleService.refreshAccessToken(refreshToken);
        return {
            success: true,
            body: { newAccessToken: newTokenData.access_token }
        };
    }
};
exports.GoogleController = GoogleController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '구글 로그인 요청',
        description: '구글 로그인을 요청 합니다.'
    }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(google_guard_1.GoogleAuthGuard),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "googleLogin", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '구글 로그인 콜백',
        description: '구글 로그인 콜백을 처리하여 토큰을 리턴합니다.'
    }),
    (0, common_1.Get)('/callback'),
    (0, common_1.UseGuards)(google_guard_1.GoogleAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "googleLoginCallback", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '구글 토큰 검증',
        description: '발급받은 토큰을 검증합니다.'
    }),
    (0, common_1.Get)('check_token'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "checkToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '구글 토큰 재발급',
        description: '구글 토큰을 갱신합니다.'
    }),
    (0, common_1.Get)('refresh'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "refreshGoogleToken", null);
exports.GoogleController = GoogleController = __decorate([
    (0, swagger_1.ApiTags)('Google_Auth'),
    (0, common_1.Controller)('auth/google'),
    __metadata("design:paramtypes", [google_service_1.GoogleService])
], GoogleController);
//# sourceMappingURL=google.controller.js.map