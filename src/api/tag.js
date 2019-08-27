// import request from '@/request'
import axios from 'axios'

export function getAllTags() {
  return new Promise((resolve, reject) =>{axios.get('/api/tag')
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

export function addTagForArticles(aid,tid,token) {
  return new Promise((resolve, reject) =>{axios.post('/api/article/'+aid+'/tag/'+tid+'?token='+token)
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);

      // alert(JSON.stringify(response))
      // alert(response.data.data)
      // alert("in1")
      // alert("ok")
      resolve(response);

      
  })
  .catch(error => {
      // 请求失败
      // console.log(error);
      // alert(2);
      // alert(('/api/user/'+userId))
      // alert("in2")
      // alert('/api/article/'+aid+'/tag/'+tid+'?token='+token)
      // alert("jjl")
      reject(error);
      // alert(id)
      // resolve(null);
  })
  })
}

export function getAllTagsDetail() {
  return request({
    url: '/tags/detail',
    method: 'get',
  })
}

export function getHotTags() {
  return request({
    url: '/tags/hot',
    method: 'get',
  })
}

export function getTag(id) {
  return request({
    url: `/tags/${id}`,
    method: 'get',
  })
}

export function getTagDetail(id) {
  return request({
    url: `/tags/detail/${id}`,
    method: 'get',
  })
}
