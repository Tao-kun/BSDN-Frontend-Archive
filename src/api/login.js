// import request from '@/request'
import axios from 'axios'

export function login(email, passwordHash) {
  const data = {
    email,
    passwordHash
  }
  return new Promise((resolve, reject) =>{axios.post('/api/session', data)
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);
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

export function logout(token) {
  return new Promise((resolve, reject) =>{axios.delete('/api/session?token='+token)
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);
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

export function getUserInfo(token) {
  return new Promise((resolve, reject) =>{

  axios.get('/api/session?token='+token)
  .then(response => {
      // post 成功，response.data 为返回的数据
      // console.log(response.data);
      // alert(1);

      let userID=response.data.data.sessionUserId
      axios.get('/api/user/'+userID)
        .then(response => {
            // post 成功，response.data 为返回的数据
            // console.log(response.data);
            // alert(1);

            // alert(JSON.stringify(response))
            resolve(response);

            
        })
        .catch(error => {
            // 请求失败
            // console.log(error);
            // alert(2);
            // alert(('/api/user/'+userId))
            reject(error);
        })
      

      
  })
  .catch(error => {
      // 请求失败
      console.log(error);
      // alert(2);
      // alert('/api/session?token='+token)
      reject(error);
  })

    
  })
}

export function register(email, nickname, passwordHash) {
  const data = {
    email,
    nickname,
    passwordHash
  }
  // return request({
  //   url: '/api/user',
  //   method: 'post',
  //   data 
  // })
    return new Promise((resolve, reject) =>{axios.post('/api/user', data)
    .then(response => {
        // post 成功，response.data 为返回的数据
        // console.log(response.data);

        axios.post('/api/session', data)
        .then(response => {
            // post 成功，response.data 为返回的数据
            // console.log(response.data);
            // alert(1);
            // alert(JSON.stringify(response))
            resolve(response);
            
        })
       
        
    })
    .catch(error => {
        // 请求失败
        // console.log(error);
        // alert(2);
        reject(error);
    })
  })
}
