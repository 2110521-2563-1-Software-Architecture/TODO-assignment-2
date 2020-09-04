import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDTO {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  author: string;
}
export class UpdateBookDTO {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  author?: string;
}
