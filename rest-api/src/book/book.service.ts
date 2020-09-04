import { Injectable } from '@nestjs/common';
import { UpdateBookDTO, CreateBookDTO } from './book.dto';
import { Book } from './book.model';

@Injectable()
export class BookService {
  private books: Book[] = [];

  find(): Book[] {
    return this.books;
  }

  findById(id: string): Book {
    return this.books.find(b => b.id === id);
  }

  create(bookDTO: CreateBookDTO): Book {
    const book = new Book(bookDTO);
    this.books.push(book);
    return book;
  }

  update(id: string, bookDTO: UpdateBookDTO): Book {
    const index = this.books.findIndex(b => b.id === id);
    const updateDTO = { ...this.books[index], ...bookDTO };
    this.books[index] = updateDTO;
    return this.books[index];
  }

  delete(id: string): Book {
    const index = this.books.findIndex(b => b.id === id);
    return this.books.splice(index, 1)[0];
  }
}
