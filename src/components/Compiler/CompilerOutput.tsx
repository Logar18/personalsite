import React, { useState } from 'react'


const CompilerOutput = () => {
    const [outputMenu, setOutputMenu] = useState("");

    return (
        <>
        <div className='flex mt-10'>
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
                    readOnly
                    style={{
                        padding:10,
                        color: "black",
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}>
                </textarea>
            </div>
        </>

)
}

export default CompilerOutput