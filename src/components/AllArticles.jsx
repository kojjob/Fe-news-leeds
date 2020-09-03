import React from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";
 import ErrorPage from './ErrorPage'

import "../styled/Layout.scss";

class AllArticles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    api.getAllArticles().then((articles) => {
      this.setState({ articles, isLoading: false,  });
    });
  }

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage err={err} />;
    return (
      <main>
        <ul className="main-articles">
          {articles.map((article) => {
            return (
              <article className="article-card" key={article.article_id}>
                <ArticleCard article={article} />
              </article>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default AllArticles;
