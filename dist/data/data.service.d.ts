import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { Datum } from './entities/datum.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
export declare class DataService {
    private readonly data;
    private readonly userService;
    constructor(data: Repository<Datum>, userService: UserService);
    dateGraphCreate(createDatumDto: CreateDatumDto): Promise<void>;
    dateGraphFindAll(): Promise<Datum[]>;
    findOne(id: number): Promise<Datum>;
    findOneUserId(id: number): Promise<Datum>;
    dateGraphUpdate(id: number, updateDatumDto: UpdateDatumDto): Promise<void>;
    remove(id: number): Promise<void>;
}
