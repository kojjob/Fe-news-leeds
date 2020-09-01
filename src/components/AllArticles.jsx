import React from "react";
import * as api from '../utils/api'
 
class AllArticles extends React.Component {

state = {
  articles: [],
}

componentDidMount() {
  this.getArticles().then((articles) => {
    this.setState({articles})
  })
}

getArticles = () => {
  return api.getAllArticles();
}

  render() {
    console.log(this.props)
    const { articles } = this.state
    return (
      <ul>
        { articles.map((article) => {
           return <li key={article.article_id}>

           </li>
        })
        }
      </ul>
    )
  }
}

export default AllArticles;
