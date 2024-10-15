import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Datum extends BaseEntity {
    readonly id: number;
    readonly graph: number;
    readonly userId: number;
    readonly createdAt: Date;
    readonly user: User;
}
