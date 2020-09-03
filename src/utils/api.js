import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://inews-api-nc.herokuapp.com/api',
});

export const getAllTopics = () => {
  console.log('About to make a request')
  return axiosInstance
    .get('/topics')
    .then((topics) => {
      return topics.data.topics
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getAllArticles = (topic, sort_by) => {
  return axiosInstance
    .get('/articles', {params: {topic,sort_by}})
    .then((articles) => {
      return articles.data.articles
    })
}
export const getSingleArticle = (article_id) => {
  return axiosInstance
    .get(`articles/${article_id}`)
    .then(({
      data: {
        article
      }
    }) => article);
};

export const getAllComments = (article_id, comments) => {
  return axiosInstance
    .get(`/articles/${article_id}/comments`)
    .then((comments) => {
      return comments.data.comments
    })
}


export const postComment = (bodyInput, article_id, user) => {
  return axiosInstance
    .post(`articles/${article_id}/comments`, {
      username: user,
      body: bodyInput.value,
    })
    .then(({ data: {comment}}) => {
      return comment;
    });
};
