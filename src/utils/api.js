import axios from 'axios'

const axiosInstance = axios.create({
  baseUrl: 'https://inews-api-nc.herokuapp.com/api'
});

export const getAllTopics = () => {
  console.log('About to make a request')
  return axiosInstance
  .get('/topics')
  .then((topics) => {
      console.log(topics)
   return topics.data.topics
  })
  .catch((error) =>{
    console.log(error)
  })
}

export const getAllArticles = () => {
  return axiosInstance
    .get('/articles')
    .then((articles) => {
      return articles.data.articles
    })
}