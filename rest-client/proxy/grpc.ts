import { Proxy } from '.'
import { InsertBookDTO } from './dto'

export class GRpcProxy implements Proxy {
  async list() {
  }

  async insert(bookDTO: InsertBookDTO) {
  }

  async get(id: string) {
  }

  async delete(id: string) {
  }

  async watch() {}
}