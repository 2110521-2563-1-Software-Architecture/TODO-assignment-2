import Axios from 'axios'
import { Proxy } from './proxy'
import { GRpcProxy as RestProxy } from './proxy/rest'
import { GRpcProxy as GRpcProxy } from './proxy/grpc'
import { createObjectCsvWriter } from 'csv-writer'
import { fork, exec } from 'child_process'
Axios.defaults.baseURL = 'http://localhost:3000'
let data: any[] = []

// Initialize a proxy here
let proxy: Proxy
// proxy = new GRpcProxy('localhost:50051')
proxy = new RestProxy()
// function ()
// const startTime = new Date().getTime()
// let finishTime: any

// proxy.list().then(res => {
//     console.log(res);
//     finishTime = new Date().getTime()
//     const time = (finishTime - startTime)/1000
//     console.info("response time : " + time+"s.")
// })
async function recordData(callNumber: Number, command) {
    if (command == null) return
    let res: any;
    let startTime = process.hrtime.bigint()
    try {
        if (command == "insert")
            await proxy.insert({ title: "A", author: "B" })
        else if (command == 'get')
            await proxy.get("125")
        else if (command == 'list')
            await proxy.list()
        else if (command == 'delete')
            await proxy.delete("124")
    } catch (error) {
        // console.error(error)
    }
    let finishTime = await process.hrtime.bigint()
    let responseTime = finishTime - startTime;
    data.push({ callNumber: callNumber, responseTime: responseTime })
}

async function listBooks(): Promise<any> {
    try {
        let res = await proxy.list()

    } catch (error) {
    }
}

async function insertBook(title, author): Promise<any> {
    let res = await proxy.insert({ title: title, author: author })
    console.log("done")
    return res
}

async function getBook(id: string): Promise<any> {
    let res = await proxy.get(id)
    return res
}

async function deleteBook(id: string): Promise<any> {
    let res = await proxy.delete(id)
    return res
}
async function repeat(command) {
    const csvWriter = createObjectCsvWriter({
        path: `../result/ScenarioA/REST_${command}.csv`,
        header: [
            { id: "callNumber", title: "Number of call" },
            { id: "responseTime", title: "Response Time" },
        ],
    });
    /// scenario A
    for (let i = 1; i <= 100; i++) {
        await recordData(i, command)
    }
    await csvWriter
        .writeRecords(data)
        .then(() => console.log("The CSV file was written successfully"));
}

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

if (command == 'list')
    listBooks();
else if (command == 'insert')
    insertBook(process.argv[0], process.argv[1]);
else if (command == 'get')
    getBook(process.argv[0]);
else if (command == 'delete')
    deleteBook(process.argv[0]);
else if (command == 'repeat')
    repeat(process.argv[0]);
