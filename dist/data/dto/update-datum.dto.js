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
exports.UpdateDatumDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_datum_dto_1 = require("./create-datum.dto");
const class_validator_1 = require("class-validator");
class UpdateDatumDto extends (0, swagger_1.PartialType)(create_datum_dto_1.CreateDatumDto) {
}
exports.UpdateDatumDto = UpdateDatumDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '그래프',
        default: '5'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateDatumDto.prototype, "graph", void 0);
//# sourceMappingURL=update-datum.dto.js.map