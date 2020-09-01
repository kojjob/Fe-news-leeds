import React from 'react'
import { Router } from '@reach/router';

import  "./App.css"
import Nav from './components/Nav';
import Header from './components/Header';
import HomePage from './components/Nav';
import AllTopics from './components/AllTopics';
import AllArticles from './components/AllArticles';

export default function App() {
  return ( 
    <div className="App">
     <Nav/>
     <Header/>
     < Router>
       <HomePage path = '/'  />
       <AllArticles path ='/articles'  />
       <AllTopics path='/topics' />
     </Router>
    </div>
  )
}
