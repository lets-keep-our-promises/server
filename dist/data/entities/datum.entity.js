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
exports.Datum = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Datum = class Datum extends typeorm_1.BaseEntity {
};
exports.Datum = Datum;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기본키',
        default: '1'
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Datum.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '그래프',
        default: '5'
    }),
    (0, typeorm_1.Column)({
        name: 'graph',
        type: 'integer',
        nullable: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Datum.prototype, "graph", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '유저 고유id',
        default: '3'
    }),
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'integer',
        nullable: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Datum.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '생성시간',
        default: '2024-09-02/09:02'
    }),
    (0, typeorm_1.CreateDateColumn)({
        name: 'createAt',
        type: 'timestamp',
        nullable: false
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Datum.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.graph, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Datum.prototype, "user", void 0);
exports.Datum = Datum = __decorate([
    (0, typeorm_1.Entity)()
], Datum);
//# sourceMappingURL=datum.entity.js.map