import Axios from 'axios'
import { Proxy } from './proxy'

Axios.defaults.baseURL = 'http://localhost:3000'

// Initialize a proxy here
let proxy: Proxy
