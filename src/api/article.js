// import request from '@/request'
import axios from 'axios'

export function getArticles(query, page,id) {

  // return new Promise((resolve, reject) =>{axios.post('/api/article?token='+token, data)
  // .then(response => {
  //     // post 成功，response.data 为返回的数据
  //     // console.log(response.data);
  //     alert(1);
  //     resolve(response);

      
  // })
  // .catch(error => {
  //     // 请求失败
  //     // console.log(error);
  //     alert(2);
  //     reject(error);
  // })
  // })
  // return request({
  //   url: '/articles',
  //   method: 'get',
  //   params: {
  //     pageNumber: page.pageNumber,
  //     pageSize: page.pageSize,
  //     name: page.name,
  //     sort: page.sort,
  //     year: query.year,
  //     month: query.month,
  //     tagId: query.tagId,
  //     categoryId: query.categoryId
  //   }
  // })
  let offset=(page.pageNumber-1)*page.pageSize
  let limit=page.pageSize
  return new Promise((resolve, reject) =>{axios.get('/api/article?id='+id+'&&offset='+offset+'&limit='+limit)
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);

      // alert(JSON.stringify(response))
      // alert(response.data.data)
      resolve(response.data.data);

      
  })
  .catch(error => {
      // 请求失败
      // console.log(error);
      // alert(2);
      // alert(('/api/user/'+userId))
      // reject(error);
      // alert(id)
      resolve(null);
  })
  })
    
}

export function getHotArtices() {
  return request({
    url: '/articles/hot',
    method: 'get'
  })
}

export function getNewArtices() {
  return request({
    url: '/articles/new',
    method: 'get'
  })
}

export function viewArticle(id) {
  // return request({
  //   url: `/articles/view/${id}`,
  //   method: 'get'
  // })
  return new Promise((resolve, reject) =>{axios.get('/api/article/'+id)
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

export function getArticlesByCategory(id) {
  return request({
    url: `/articles/category/${id}`,
    method: 'get'
  })
}

export function getArticlesByTag(id) {
  return request({
    url: `/articles/tag/${id}`,
    method: 'get'
  })
}


export function publishArticle(article,token) {
  // return request({
  //   url: '/articles/publish',
  //   method: 'post',
  //   data: article
  // })
      return new Promise((resolve, reject) =>{axios.post('/api/article?token='+token, article)
      .then(response => {
          // post 成功，response.data 为返回的数据
          // console.log(response.data);
          resolve(response);
          
      })
      .catch(error => {
          // 请求失败
          // console.log(error);
          // alert(2);
          reject(error);
      })
    })
}

export function editArticle(article,token,aid) {
  // return request({
  //   url: '/articles/publish',
  //   method: 'post',
  //   data: article
  // })
      return new Promise((resolve, reject) =>{axios.put('/api/article/'+aid+'?token='+token, article)
      .then(response => {
          // post 成功，response.data 为返回的数据
          // console.log(response.data);
          resolve(response);
          
      })
      .catch(error => {
          // 请求失败
          // console.log(error);
          // alert(2);
          reject(error);
      })
    })
}

export function deleteArticleById(token,aid) {
  // return request({
  //   url: '/articles/publish',
  //   method: 'post',
  //   data: article
  // })
      return new Promise((resolve, reject) =>{axios.delete('/api/article?id='+aid+'&token='+token)
      .then(response => {
          // post 成功，response.data 为返回的数据
          // console.log(response.data);
          resolve(response);
          
      })
      .catch(error => {
          // 请求失败
          // console.log(error);
          // alert(2);
          reject(error);
      })
    })
}

export function listArchives() {
  return request({
    url: '/articles/listArchives',
    method: 'get'
  })
}

export function getArticleById(id) {
  // return request({
  //   url: `/articles/${id}`,
  //   method: 'get'
  // })
  return new Promise((resolve, reject) =>{axios.get('/api/article/'+id)
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

export function getArticlesByKeyword(query, page,sid,keyword) {

  // return new Promise((resolve, reject) =>{axios.post('/api/article?token='+token, data)
  // .then(response => {
  //     // post 成功，response.data 为返回的数据
  //     // console.log(response.data);
  //     alert(1);
  //     resolve(response);

      
  // })
  // .catch(error => {
  //     // 请求失败
  //     // console.log(error);
  //     alert(2);
  //     reject(error);
  // })
  // })
  // return request({
  //   url: '/articles',
  //   method: 'get',
  //   params: {
  //     pageNumber: page.pageNumber,
  //     pageSize: page.pageSize,
  //     name: page.name,
  //     sort: page.sort,
  //     year: query.year,
  //     month: query.month,
  //     tagId: query.tagId,
  //     categoryId: query.categoryId
  //   }
  // })
  let offset=(page.pageNumber-1)*page.pageSize
  let limit=page.pageSize
  return new Promise((resolve, reject) =>{axios.get('/api/article?offset='+offset+'&limit='+limit+'&sort='+sid+'&keyword='+keyword)
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);

      // alert(JSON.stringify(response))
      // alert(response.data.data)
      resolve(response.data.data);

      
  })
  .catch(error => {
      // 请求失败
      // console.log(error);
      // alert(2);
      // alert(('/api/user/'+userId))
      // reject(error);
      // alert(id)
      resolve(null);
  })
  })
    
}
