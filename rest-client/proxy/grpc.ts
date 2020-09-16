import { Proxy } from '.'
import { Book, InsertBookDTO } from './dto'

import * as protoLoader from '@grpc/proto-loader'
import * as grpc from 'grpc'

const PROTO_PATH = __dirname + '/books.proto'
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).books
export class GRpcProxy implements Proxy {
  private client: any
  constructor(endpoint?: String) {
    if (endpoint) {
      this.client = new protoDescriptor.BookService(
        endpoint,
        grpc.credentials.createInsecure(),
      )
    } else {
      this.client = new protoDescriptor.BookService(
        'localhost:50051',
        grpc.credentials.createInsecure(),
      )
    }
  }
  async list() {
    return new Promise<Book[]>((resolve, reject) =>
      this.client.list({}, (error: any, response: any) => {
        if (response) {
          resolve(response)
        } else {
          // console.error(error)
          reject(error)
        }
      }),
    )
  }

  async insert(bookDTO: InsertBookDTO) {
    return new Promise<Book>((resolve, reject) =>
      this.client.insert(bookDTO, (error: any, response: any) => {
        if (response) {
          resolve(response)
        } else {
          // console.error(error)
          reject(error)
        }
      }),
    )
  }

  async get(id: string) {
    return new Promise<Book>((resolve, reject) =>
      this.client.get({ id }, (error: any, response: any) => {
        if (response) {
          resolve(response)
        } else {
          // console.error(error)
          reject(error)
        }
      }),
    )
  }

  async delete(id: string) {
    return new Promise<Book>((resolve, reject) =>
      this.client.delete({ id }, (error: any, response: any) => {
        if (response) {
          resolve(response)
        } else {
          // console.error(error)
          reject(error)
        }
      }),
    )
  }

  async watch() {}
}
