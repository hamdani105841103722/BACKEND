import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, Matches, } from "class-validator";

export class registerUserDTO {
    
    @ApiProperty({
        description : "Nama Pengguna",
        type : String,
        example : "Hamdani"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 50)
    username : string;

    @ApiProperty({
        description : "Password",
        type : String,
        example : "password"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 50)
    password : string;
}