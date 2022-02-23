import React from 'react'

type DropDownProps = {
    handleLoadTest: Function
}
const DropDown = (props: DropDownProps) => {
  return (
    <div className="relative inline-block text-left">
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className='px-6 border-x border-t border-black rounded-tl-md bg-slate-300 hover:cursor-pointer hover:bg-slate-400' type="button">Load Test</button>
                <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-300 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Lex test1')}>Lex test1</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Lex test2')}>Lex test2</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Lex test3')}>Lex test3</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Lex test4')}>Lex test4</p>
                        </li>
                    </ul>
                    <ul className="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Parse test1')}>Parse test1</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Parse test2')}>Parse test2</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Parse test3')}>Parse test3</p>
                        </li>
                        <li>
                            <p className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={() => props.handleLoadTest('Parse test4')}>Parse test4</p>
                        </li>
                    </ul>
                </div>
            </div>
  )
}

export default DropDown