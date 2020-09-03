import React from 'react'
import {Router} from '@reach/router';

import "./App.scss"
import "./styled/Layout.scss"
import Nav from './components/Nav';
import Header from './components/Header';
import AllTopics from './components/AllTopics';
import AllArticles from './components/AllArticles';
import Article from './components/Article';



function App() {
  return ( <
    div className = "App" >
    <Nav / >
    <Header / >
    <Router>
    <AllArticles path = '/articles' / >
    <Article path = '/articles/:article_id' / >
    <AllTopics path = '/topics' / >
    </Router> 
    </div>
  )
}

export default App;