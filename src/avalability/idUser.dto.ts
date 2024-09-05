import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNumber } from "class-validator";

export class idUserDTO {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    id: number; //id

}