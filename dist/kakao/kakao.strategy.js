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
exports.KakaoStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
let KakaoStrategy = class KakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, 'kakao') {
    constructor(configService) {
        super({
            clientID: configService.get('KAKAO_RESTAPI_KEY'),
            clientSecret: configService.get('KAKAO_CLIENT_PW'),
            callbackURL: configService.get('KAKAO_REDIRECT_URI'),
            scope: ['profile_nickname', 'profile_image', 'account_email']
        });
        this.configService = configService;
    }
    authorizationParams() {
        return {
            access_type: 'offline',
            prompt: 'select_account'
        };
    }
    async validate(accessToken, refreshToken, profile, done) {
        try {
            const { id, displayName, provider, _json: { kakao_account } } = profile;
            const email = kakao_account.email || null;
            const profileUrl = kakao_account.profile.profile_image_url || null;
            const user = {
                id: id,
                provider: provider,
                profileUrl: profileUrl,
                name: displayName,
                email: email,
                accessToken,
                refreshToken
            };
            return done(null, user);
        }
        catch (err) {
            return done(err, false);
        }
    }
};
exports.KakaoStrategy = KakaoStrategy;
exports.KakaoStrategy = KakaoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], KakaoStrategy);
//# sourceMappingURL=kakao.strategy.js.map