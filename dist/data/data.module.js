"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModule = void 0;
const common_1 = require("@nestjs/common");
const data_service_1 = require("./data.service");
const data_controller_1 = require("./data.controller");
const typeorm_1 = require("@nestjs/typeorm");
const datum_entity_1 = require("./entities/datum.entity");
const user_module_1 = require("../user/user.module");
let DataModule = class DataModule {
};
exports.DataModule = DataModule;
exports.DataModule = DataModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([datum_entity_1.Datum]), user_module_1.UserModule],
        controllers: [data_controller_1.DataController],
        providers: [data_service_1.DataService]
    })
], DataModule);
//# sourceMappingURL=data.module.js.map