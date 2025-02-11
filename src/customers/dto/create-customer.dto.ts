import { IsEmail, IsEnum, isNotEmpty, IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateCustomerDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsOptional()
    @IsString()
    soughtVehicle?: string;

    @IsEnum(['NEW', 'PO'], {
        message: 'Valid Deal Type Required...!'
    })
    @IsOptional()
    dealType?: 'NEW' | 'PO';
}
