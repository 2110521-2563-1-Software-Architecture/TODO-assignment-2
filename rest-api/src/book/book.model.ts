import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Book extends Document {
  @ApiProperty({ required: true })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
