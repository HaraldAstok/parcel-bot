import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateParcelDto {
    @IsString()
    @IsNotEmpty()
    sku: string;

    @IsString()
    description: string;

    @IsString()
    street_address: string;

    @IsString()
    town: string;

    @IsString()
    country: string;
    
    @IsNumber()
    user_id: number;
}