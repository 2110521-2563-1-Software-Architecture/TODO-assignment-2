import Axios from 'axios'
import { Proxy } from './proxy'
import { GRpcProxy } from './proxy/grpc'

Axios.defaults.baseURL = 'http://localhost:3000'

// Initialize a proxy here
let proxy: Proxy
proxy = new GRpcProxy('localhost:50051');
// proxy.insert({author:"a",title:"b"}).then(res=>{console.log(res)})
