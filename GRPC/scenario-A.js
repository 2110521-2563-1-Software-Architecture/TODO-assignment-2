const util = require('util');
const exec = util.promisify(require('child_process').exec);
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function repeat(num, exec_command) {
    let res_list = [];

    for(let i = 1;i<=num;i++){
        let t1 = new Date().getTime();
        const {stdout, stderr} = await exec(exec_command);
        // if (i%10 == 0) console.log("stdout: " + `${stdout}`);
        let t2 = new Date().getTime();
        const responseTime = t2-t1;
        if (i==1) console.log("responseTime: " + responseTime);
        res_list.push({callNumber: i, responseTime: responseTime});
    }
    return res_list;
}

async function main() {
    var command = process.argv[2];
    var num = process.argv[3];
    var scenario = process.argv[4];

    const csvWriter = createCsvWriter({
        path: `../result/Scenario_${scenario}_gRPC_${command}.csv`,
        header: [
            { id: "callNumber", title: "Number of call" },
            { id: "responseTime", title: "Response Time" },
        ]
    });

    let exec_command = "";
    if (command == 'list')
        exec_command = "node client.js list";
    else if (command == 'insert')
        exec_command = "node client.js insert 1 1 1";
    else if (command == 'get')
        exec_command = "node client.js get 1";
    else if (command == 'delete')
        exec_command = "node client.js delete 1";

    // console.log("Time used: " + responseTime + " milliseconds.");

    const records = await repeat(num, exec_command);

    csvWriter.writeRecords(records)       // returns a promise
        .then(() => {
            console.log('...Done');
        });
}

main()