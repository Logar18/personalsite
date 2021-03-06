import React, {  } from 'react';
import './App.css';
import { SideMenu, Home, Compiler, VoteSafe, Algorithms, Linux, LanguageTheory, Database } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='p-20 flex'>
      <Router>
        <SideMenu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/compiler' element={<Compiler/>}/>
          <Route path='/votesafe' element={<VoteSafe/>}/>
          <Route path='/algorithms' element={<Algorithms/>}/>
          <Route path='/linux' element={<Linux/>}/>
          <Route path='/languagetheory' element={<LanguageTheory/>}/>
          <Route path='/database' element={<Database/>}/>
          <Route path='/grammar' element={() => { 
            window.location.href = 'https://www.labouseur.com/courses/compilers/grammar.pdf'; 
            return null;
          }}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
