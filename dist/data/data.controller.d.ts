import { DataService } from './data.service';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { Datum } from './entities/datum.entity';
export declare class DataController {
    private readonly dataService;
    constructor(dataService: DataService);
    dateGraphCreate(createDatumDto: CreateDatumDto): Promise<{
        success: boolean;
    }>;
    dateGraphFindAll(): Promise<{
        success: boolean;
        body: Datum[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        body: Datum;
    }>;
    dateGraphUpdate(id: number, updateDatumDto: UpdateDatumDto): Promise<{
        success: boolean;
        body: string;
    }>;
    dateGraphRemove(id: number): Promise<{
        success: boolean;
        body: string;
    }>;
}
