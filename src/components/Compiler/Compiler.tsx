import React, { useEffect, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import CompilerHeader from './CompilerHeader';
import DropDown from './DropDown';
import CompilerOutput from './CompilerOutput';
import { useLocation } from 'react-router';
import { runCode } from './API';

const Compiler = () => {
    const [code, setCode] = useState("");
    const [outputWindow, setOutputWindow] = useState("$ ");
    const [programOutput, setProgramOutput] = useState("$ ");
    const location = useLocation();
    const [lexOutput, setLexOutput] = useState([]);
    const [parseOutput, setParseOutput] = useState([]);

    const handleLoadTest = (test: string) => {
        setCode(test);
    }

    const handleCompile = async ()  => {
        let output = await runCode(code)
        setOutputWindow("$ CHECK DEBUG LOGS");
        setLexOutput((output.data[0]))
        setParseOutput((output.data[1]))
    }

    const formatOutput = (output:any) => {
        let formattedOutput = "";
        if(output != []) {
            output.forEach((e: string) => {
                e != "\n" ? formattedOutput += ("$ " + e + "\n") : formattedOutput += ("$ " + e);
            });
        }
        return formattedOutput;
    }
 
    return (
    <div className='flex-col w-full px-10'>
        <CompilerHeader/>

        {/* BUTTONS */}
        <div className='flex justify-end'>
            <DropDown handleLoadTest={handleLoadTest}/>
            <p className='px-6 border-x border-t border-black rounded-tr-md bg-lime-500 hover:cursor-pointer hover:bg-lime-600' onClick={() => handleCompile()}>Compile</p>
        </div>

        {/* CODE EDITOR */}
        <div className='border border-black'>
            <CodeEditor
                value={code}
                language="python"
                placeholder="Enter source code here..."
                onChange={(evn) => setCode(evn.target.value)}
                padding={10}
                style={{
                    height: 400,
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>

        {/* EDITOR OUTPUT */}
        <div className='flex'>
            <div className='w-1/6 flex-col'>
            <ul className='flex-col list-none font-light'>
                        <li className='p-3 text-sm bg-gray-400 hover:text-white border border-black hover:cursor-pointer' onClick={() => {setOutputWindow("$ CHECK DEBUG LOGS");}}>
                            Program Output
                        </li>
                        <li className='p-3 text-sm bg-gray-400 hover:text-white border border-black hover:cursor-pointer' onClick={() => {console.log(formatOutput(lexOutput)); setOutputWindow(formatOutput(lexOutput))}}>
                            Lexical Analysis Debug
                        </li>
                        <li className='p-3 text-sm bg-gray-400 hover:text-white border border-black hover:cursor-pointer' onClick={() => {setOutputWindow(formatOutput(parseOutput))}}>
                            Parser Debug
                        </li>
                        <li className='p-3 text-sm bg-gray-400 hover:text-white border border-black hover:cursor-pointer rounded-bl-md' onClick={() =>{setOutputWindow("$ SEMANTIC ANALYSIS OUTPUT N/A")}}>
                            Semantic Analysis Debug
                        </li>
                    </ul>
            </div>
            <textarea
                className='w-5/6'
                value={outputWindow}
                readOnly
                style={{
                    padding:10,
                    color: "white",
                    fontSize: 12,
                    minHeight: 224,
                    height: 224,
                    maxHeight: 224,
                    backgroundColor: "#191919",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}>
            </textarea>
        </div>
        <CompilerOutput/>
    </div>  
    
    )
}

export default Compiler