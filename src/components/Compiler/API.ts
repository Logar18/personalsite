import axios from "axios";

const COMPILER_URL = "http://localhost:8080";
const CPU_URL = "http://localhost:5000";

export const runCode = async (sourceCode:string) => {
   return axios.get(COMPILER_URL+"/compile/", {
       params: {
           source: sourceCode
       }
   });
}