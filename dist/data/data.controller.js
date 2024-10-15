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
exports.DataController = void 0;
const common_1 = require("@nestjs/common");
const data_service_1 = require("./data.service");
const create_datum_dto_1 = require("./dto/create-datum.dto");
const update_datum_dto_1 = require("./dto/update-datum.dto");
const swagger_1 = require("@nestjs/swagger");
let DataController = class DataController {
    constructor(dataService) {
        this.dataService = dataService;
    }
    async dateGraphCreate(createDatumDto) {
        await this.dataService.dateGraphCreate(createDatumDto);
        return {
            success: true,
        };
    }
    async dateGraphFindAll() {
        const dateGraphs = await this.dataService.dateGraphFindAll();
        return {
            success: true,
            body: dateGraphs
        };
    }
    async findOne(id) {
        const graph = await this.dataService.findOne(id);
        if (!graph) {
            throw new common_1.NotFoundException({
                success: false,
                message: `${id}를 가진 date를 찾지 못했습니다`
            });
        }
        return {
            success: true,
            body: graph
        };
    }
    async dateGraphUpdate(id, updateDatumDto) {
        const graph = await this.dataService.findOne(id);
        if (!graph) {
            throw new common_1.NotFoundException({
                success: false,
                message: `${id}를 가진 date를 찾지 못했습니다`
            });
        }
        await this.dataService.dateGraphUpdate(id, updateDatumDto);
        return {
            success: true,
            body: `ID : ${graph.id} 업데이트 되었습니다.`
        };
    }
    async dateGraphRemove(id) {
        const graph = await this.dataService.findOne(id);
        if (!graph) {
            throw new common_1.NotFoundException({
                success: false,
                message: `ID : ${id} date를 찾지 못했습니다`
            });
        }
        await this.dataService.remove(id);
        return {
            success: true,
            body: `ID : ${graph.id} 삭제가 되었습니다.`
        };
    }
};
exports.DataController = DataController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '데이터 추가',
        description: '데이터베이스에 데이터 그래프 값을 추가합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: create_datum_dto_1.CreateDatumDto }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_datum_dto_1.CreateDatumDto]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "dateGraphCreate", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '데이터 그래프 모두 조회.'
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataController.prototype, "dateGraphFindAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '데이터 그래프 하나만 조회.'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '데이터 그래프 수정.'
    }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_datum_dto_1.UpdateDatumDto]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "dateGraphUpdate", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '데이터 그래프 삭제.'
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "dateGraphRemove", null);
exports.DataController = DataController = __decorate([
    (0, swagger_1.ApiTags)('Date_Graph'),
    (0, common_1.Controller)('data'),
    __metadata("design:paramtypes", [data_service_1.DataService])
], DataController);
//# sourceMappingURL=data.controller.js.map