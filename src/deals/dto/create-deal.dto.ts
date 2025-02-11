import { IsInt, IsEnum, isNotEmpty, IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateDealDto {
    @IsString()
    soughtVehicle: string;

    @IsString()
    @IsEnum(['NEW', 'PO'], {
        message: 'Valid Deal Type Required...!'
    })
    dealType: 'NEW' | 'PO';

    @IsInt()
    customerId: number;
}
