import axios from "axios";

const COMPILER_URL = "http://localhost:8080";
const CPU_URL = "http://localhost:5000";

export const runCode = async () => {
    let results = {
        compiler: {},
        cpu: {}
    };
    let compilerResults = 200;
    if(compilerResults == 200) {
        results.compiler = {
            ast: "tree",
            cst: "tree",
            codeGen: []}
        let cpuResults = 200;
        if(cpuResults == 200) {
            results.cpu = {
                output: {},
            }
            return results;
        }
    }
}