import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.model';
import { UpdateBookDTO } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Get()
  find(): Promise<Book[]> {
    return this.service.find();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() bookDTO: Book) {
    return this.service.create(bookDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() bookDTO: UpdateBookDTO) {
    return this.service.update(id, bookDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
