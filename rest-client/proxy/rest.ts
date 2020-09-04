import { Proxy } from '.'
import Axios from 'axios'
import { Book, InsertBookDTO } from './dto'
///Rest?
export class GRpcProxy implements Proxy {
  async list() {
    const { data } = await Axios.get<Book[]>('/book')
    return data
  }

  async insert(bookDTO: InsertBookDTO) {
    const { data } = await Axios.post<Book>('/book', bookDTO)
    return data
  }

  async get(id: string) {
    const { data } = await Axios.get<Book>('/book', { params: { id }})
    return data
  }

  async delete(id: string) {
    const { data } = await Axios.delete<Book>('/book', { params: { id }})
    return data
  }

  async watch() {}
}