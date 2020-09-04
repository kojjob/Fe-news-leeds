import axios from 'axios'

const url = axios.create({
  baseURL: 'https://inews-api-nc.herokuapp.com/api',
});

export const getAllTopics = () => {
  return url
    .get('/topics')
    .then((topics) => {
      return topics.data.topics
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getAllArticles = (topic, sort_by) => {
  return url
    .get('/articles', {params: {topic,sort_by}})
    .then((articles) => {
      return articles.data.articles
    })
}
export const getSingleArticle = (article_id) => {
  return url
    .get(`articles/${article_id}`)
    .then(({
      data: {
        article
      }
    }) => article);
};

export const getAllComments = (article_id, comments) => {
  return url
    .get(`/articles/${article_id}/comments`)
    .then((comments) => {
      return comments.data.comments
    })
}


export const postComment = (id, comment) => {
  return url
    .post(`/articles/${id}/comments`, comment)
    .then(({data}) => {
      //returns the data posted on top of the comments
      return data[0];
    });
};