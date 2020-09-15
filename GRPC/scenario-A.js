const util = require('util');
const exec = util.promisify(require('child_process').exec);
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function main() {
    var command = process.argv[2];
    var num = process.argv[3];
    let res_list = [];

    const csvWriter = createCsvWriter({
        path: `../result/Scenario_A_gRPC_${command}.csv`,
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
    
    for(let i = 0;i<num;i++){
        let dateTime = new Date();
        const t1 = dateTime.getTime();
        const {stdout, stderr} = await exec(exec_command);
        if (i%10 == 0) console.log("stdout: " + `${stdout}`);
        let dateTime2 = new Date();
        const t2 = dateTime2.getTime();
        const responseTime = t2-t1;
        res_list.push({callNumber: i+1, responseTime: responseTime});
    }
    
    // console.log("Time used: " + responseTime + " milliseconds.");
    
    const records = res_list;
    
    csvWriter.writeRecords(records)       // returns a promise
        .then(() => {
            console.log('...Done');
        });
}

main()