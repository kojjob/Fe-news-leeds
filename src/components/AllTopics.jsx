import React, { Component } from "react";
import * as api from "../utils/api";

class AllTopics extends Component {
  state = {
    topics: [],
    isLoading: true,
  };
  
  componentDidMount() {
    console.log('Mounting')
    api.getAllTopics().then((topics) => {
      console.log(topics)
      this.setState({ topics, isLoading: false });
    });
  }
  render() {
  
    const { isLoading } = this.state;
    if (isLoading) return <p>Loading ...</p>;
    const { slug, description } = this.state.topics;
    return (
      <main className="blocks">
        <p>All topics</p>
        {this.topics.map((topic) => (
          <div className="topic" key={slug}>
            <h1 className="topic-name">{slug}</h1>
            <p className="topic-num">{description}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default AllTopics;
