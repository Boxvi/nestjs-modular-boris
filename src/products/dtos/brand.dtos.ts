import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Nike' })
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ example: 'https://www.nike.com' })
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
