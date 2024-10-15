import { CreateDatumDto } from './create-datum.dto';
declare const UpdateDatumDto_base: import("@nestjs/common").Type<Partial<CreateDatumDto>>;
export declare class UpdateDatumDto extends UpdateDatumDto_base {
    readonly graph: number;
}
export {};
