import React, { Component } from "react";
import * as api from "../utils/api";

class AllTopics extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }
  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <p>Loading ...</p>;
    return (
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <h2>{topic.slug}</h2>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default AllTopics;
