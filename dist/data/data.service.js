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
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const datum_entity_1 = require("./entities/datum.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
let DataService = class DataService {
    constructor(data, userService) {
        this.data = data;
        this.userService = userService;
    }
    async dateGraphCreate(createDatumDto) {
        const userId = await this.userService.getOneUser(createDatumDto.userId);
        if (!userId) {
            throw new common_1.NotAcceptableException({
                success: false,
                message: `ID : ${createDatumDto.userId}를 가진 해당 유저는 없습니다.`
            });
        }
        await this.data.insert({
            graph: createDatumDto.graph,
            userId: createDatumDto.userId,
        });
    }
    async dateGraphFindAll() {
        return await this.data.find();
    }
    async findOne(id) {
        return await this.data.findOne({
            where: {
                id
            }
        });
    }
    async findOneUserId(id) {
        return await this.data.findOne({
            where: {
                userId: id
            }
        });
    }
    async dateGraphUpdate(id, updateDatumDto) {
        await this.data.update({ id }, updateDatumDto);
    }
    async remove(id) {
        await this.data.delete({ id });
    }
};
exports.DataService = DataService;
exports.DataService = DataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(datum_entity_1.Datum)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], DataService);
//# sourceMappingURL=data.service.js.map