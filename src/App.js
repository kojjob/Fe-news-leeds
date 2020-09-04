import React, {Component} from 'react'
import {Router} from '@reach/router';

import "./App.scss"
import "./styled/Layout.scss"
import Nav from './components/home/Nav';
import Header from './components/home/Header';
import AllTopics from './components/articles/AllTopics';
import AllArticles from './components/articles/AllArticles';
import Article from './components/articles/Article';



class App extends Component {
  render() {

    return ( 
    <div className = "App" >
      <Nav />
      <Header />
      <Router>
      <AllArticles path = '/articles' />
      <Article path = '/articles/:article_id' />
      <AllTopics path = '/topics' />
      </Router> 
    </div>
    )
  }
}

export default App;