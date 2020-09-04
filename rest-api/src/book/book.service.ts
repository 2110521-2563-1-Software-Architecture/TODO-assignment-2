import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.model';
import { Model } from 'mongoose';
import { UpdateBookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private readonly model: Model<Book>) {}

  find(): Promise<Book[]> {
    return this.model.find().exec();
  }

  findById(id: string): Promise<Book> {
    return this.model.findById(id).exec();
  }

  create(bookDTO: Book) {
    const book = new this.model(bookDTO);
    return book.save();
  }

  update(id: string, bookDTO: UpdateBookDTO): Promise<Book> {
    return this.model.findByIdAndUpdate(id, bookDTO, { new: true }).exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
