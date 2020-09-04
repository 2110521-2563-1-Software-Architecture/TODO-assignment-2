import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDTO {
  @ApiProperty({ required: false })
  title: string;

  @ApiProperty({ required: false })
  author: string;
}
