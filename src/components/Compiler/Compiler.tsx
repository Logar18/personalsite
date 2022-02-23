import React, { useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import CompilerHeader from './CompilerHeader';

const Compiler = () => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("$ ");
    const [outputMenu, setOutputMenu] = useState("");
    
    const handleLoadTest = (test: string) => {
        setCode(test);
    }

    return (
    <div className='flex-col w-full px-10'>
        <CompilerHeader/>
        <div className='flex justify-end'>
            <div className="relative inline-block text-left">
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className='px-6 border-x border-t border-black rounded-tl-md bg-slate-300 hover:cursor-pointer hover:bg-slate-400' type="button">Load Test</button>
                <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-300 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Lex test1')}>Lex test1</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Lex test2')}>Lex test2</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Lex test3')}>Lex test3</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Lex test4')}>Lex test4</p>
                        </li>
                    </ul>
                    <ul className="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Parse test1')}>Parse test1</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Parse test2')}>Parse test2</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Parse test3')}>Parse test3</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => handleLoadTest('Parse test4')}>Parse test4</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='px-6 border-x border-t border-black rounded-tr-md bg-lime-500 hover:cursor-pointer hover:bg-lime-600' onClick={()=>{setOutput("$ " + code)}}>Compile</p>
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
                    height: 150,
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