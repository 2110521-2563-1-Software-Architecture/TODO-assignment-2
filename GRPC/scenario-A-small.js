const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
    var command = process.argv[2];
    let exec_command = "";
    if (command == 'list')
        exec_command = "node client.js list";
    else if (command == 'insert')
        exec_command = "node client.js insert 1 1 1";
    else if (command == 'get')
        exec_command = "node client.js get 1";
    else if (command == 'delete')
        exec_command = "node client.js delete 1";
    let dateTime = new Date();
    const t1 = dateTime.getTime();
    const {stdout, stderr} = await exec(exec_command);
    let dateTime2 = new Date();
    const t2 = dateTime2.getTime();

    if (stderr) {
        console.error(`error: ${stderr}`);
    }

    const responseTime = t2-t1;
    console.log("stdout: " + `${stdout}`);
    console.log("Time used: " + responseTime + " milliseconds.");
}

main()