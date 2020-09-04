import { CreateBookDTO } from "./book.dto";

export class Book {
  public id: string;
  public title: string;
  public author: string;

  constructor(bookDTO: CreateBookDTO) {
    this.id = Date.now() + ''
    this.title = bookDTO.title;
    this.author = bookDTO.author;
  }
}
