const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fork = util.promisify(require('child_process').fork);

async function createClientProcess() {
    let commands = ['list', 'insert', 'get', 'delete']
    for(let i = 0 ; i<5 ;i++){
        let randomCommand = commands[getRandomInt(commands.length)]
        let execution_text = `node scenario-A.js ${randomCommand} 100 B`;
        await exec(execution_text, (error, stdout, stderr) => {
            console.log(`child${i} stdout: `+stdout)
        })
    }

}

async function main() {
    createClientProcess();
}

main()