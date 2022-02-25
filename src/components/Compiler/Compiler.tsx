import React, { useEffect, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import CompilerHeader from './CompilerHeader';
import DropDown from './DropDown';
import CompilerOutput from './CompilerOutput';
import { useLocation } from 'react-router';

const Compiler = () => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("$ ");
    const location = useLocation();

    const handleLoadTest = (test: string) => {
        setCode(test);
    }

 
    return (
    <div className='flex-col w-full px-10'>
        <CompilerHeader/>

        {/* BUTTONS */}
        <div className='flex justify-end'>
            <DropDown handleLoadTest={handleLoadTest}/>
            <p className='px-6 border-x border-t border-black rounded-tr-md bg-lime-500 hover:cursor-pointer hover:bg-lime-600' onClick={()=>{setOutput("$ " + code)}}>Compile</p>
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
                    height: 500,
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>

        {/* EDITOR OUTPUT */}
        <div className='flex'>
            <textarea
                className='w-full'
                value={output}
                readOnly
                style={{
                    padding:10,
                    color: "white",
                    fontSize: 12,
                    height: 150,
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