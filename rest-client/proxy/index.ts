import { Book, InsertBookDTO } from "./dto";

export interface Proxy {
  list(): Promise<Book[]>
  insert(bookDTO: InsertBookDTO): Promise<Book>
  get(id: string): Promise<Book>
  delete(id: string): Promise<Book>
  watch(): Promise<any>
}
