import Axios from 'axios'
import { Proxy } from './proxy'
import { GRpcProxy as RestProxy } from './proxy/rest'
import { GRpcProxy as GRpcProxy } from './proxy/grpc'
import { createObjectCsvWriter } from 'csv-writer'
import { fork } from 'child_process'
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
    let startTime = new Date().getTime()
    try {
        if (command == "insert")
            res = await proxy.insert({ title: "A", author: "B" })
        else if (command == 'get')
            res = await proxy.get("125")
        else if (command == 'list')
            res = await proxy.list()
        else if (command == 'delete')
            res = await proxy.delete("124")
    } catch (error) {
        console.error(error)
    }
    let finishTime = await new Date().getTime()
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
    /// scenario
    let scenario = 'A'
    const csvWriter = createObjectCsvWriter({
        path: `../result/Scenario${scenario}_gRPC_${command}.csv`,
        header: [
            { id: "callNumber", title: "Number of call" },
            { id: "responseTime", title: "Response Time" },
        ],
    });

    for (let i = 1; i <= 100; i++) {
        await recordData(i, command)
    }
    await csvWriter
        .writeRecords(data)
        .then(() => console.log("The CSV file was written successfully"));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createClientProcess() {
    const child = fork('client.ts')
    let commands = ['list', 'insert', 'get', 'delete']
    let randomCommand = commands[getRandomInt(commands.length)]
    // const child = spawn('pwd')
    console.log(randomCommand)
    child.stdout.on('data', (data) => {
        console.log(`client stdout:\n${data}`);
    });
    child.stderr.on('data', (data) => {
        console.error(`client stderr:\n${data}`);
    });
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
else if (command == 'fork')
    createClientProcess()