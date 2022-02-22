import React, { useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import CompilerHeader from './CompilerHeader';

const Compiler = () => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("$ ");
    const [outputMenu, setOutputMenu] = useState("");

    return (
    <div className='flex-col w-full px-10'>
        <CompilerHeader/>
        <div className='flex justify-end' onClick={()=>{setOutput("$ " + code)}}>
            <p className='px-6 border-x border-t border-black rounded-t-md bg-lime-500 hover:cursor-pointer hover:bg-lime-600'>Compile</p>
        </div>
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
        <div className='flex'>
            <textarea
                className='w-full'
                value={output}
                style={{
                    padding:10,
                    color: "white",
                    fontSize: 12,
                    backgroundColor: "#191919",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}>
            </textarea>
        </div>
        <div className='flex mt-20'>

                <ul className='flex list-none font-light'>
                    <li className='p-2 border border-black hover:cursor-pointer rounded-tl-md' onClick={() => {setOutputMenu('CST')}}>
                        Concrete Syntax Tree
                    </li>
                    <li className='p-2 border-y border-r border-black hover:cursor-pointer' onClick={() => {setOutputMenu('AST')}}>
                        Abstract Syntax Tree
                    </li>
                    <li className='p-2 border-y border-r border-black hover:cursor-pointer' onClick={() => {setOutputMenu('Scope Tree')}}>
                        Scope Tree
                    </li>
                    <li className='p-2 border-y border-r border-black hover:cursor-pointer rounded-tr-md' onClick={() => {setOutputMenu('Code Generation')}}>
                        Code Generation
                    </li>
                </ul>
        </div>
        <div className='flex border border-black'>
            <textarea
                className='w-full'
                value={outputMenu}
                style={{
                    padding:10,
                    color: "black",
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}>
            </textarea>
        </div>
    </div>  
    )
}

export default Compiler