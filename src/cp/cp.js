import cp from "child_process";

const spawnChildProcess = async (args) => {
    // Write your code here

    const child = cp.fork('src/cp/files/script.js', []);
    child.on('close', (code) =>
        console.log(`${code}`)
    );

};

spawnChildProcess();
