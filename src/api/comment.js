// import request from '@/request'
import axios from 'axios'

export function getCommentsByArticle(id) {
  return new Promise((resolve, reject) =>{axios.get('/api/comment?id='+id+'&offset=0&limit=9999')
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);

      // alert(JSON.stringify(response))
      // alert(response.data.data)
      // alert("in1")
      resolve(response);

      
  })
  .catch(error => {
      // 请求失败
      // console.log(error);
      // alert(2);
      // alert(('/api/user/'+userId))
      // alert("in2")
      reject(error);
      // alert(id)
      // resolve(null);
  })
  })
}

export function publishComment(aid,content,token) {
  const data = {
    content:content,
    articleId:aid
  }
  return new Promise((resolve, reject) =>{axios.post('/api/comment/article/'+aid+'?token='+token, data)
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);
      // alert("ok")
      resolve(response);

      
  })
  .catch(error => {
      // 请求失败
      // console.log(error);
      // alert(2);
      // alert(JSON.stringify(data))
      // alert("bad")
      reject(error);
  })
  })
}


