// import request from '@/request'
import axios from 'axios'
import crypto from 'crypto'

function getMD5(pass){

    let md5 = crypto.createHash("md5");

    md5.update(pass);

    return md5.digest('hex')

}

export function login(email, password) {
    let passMd5 = getMD5(password.trim());
    let pass = getMD5(passMd5 + 'BSDN');

  const data = {
    email,
    passwordHash:pass
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
    //   alert(JSON.stringify(error))
      reject(error);
  })
  })
}


export function favor(uid,token) {
  return new Promise((resolve, reject) =>{axios.post('/api/follow/'+uid+'?token='+token)
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
    //   alert(JSON.stringify(error))
      reject(error);
  })
  })
}
export function checkfavor(uid,token) {
    return new Promise((resolve, reject) =>{axios.get('/api/follow/check/'+uid+'?token='+token)
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
      //   alert(JSON.stringify(error))
        reject(error);
    })
    })
  }

export function unfavor(uid,token) {
    return new Promise((resolve, reject) =>{axios.delete('/api/follow/'+uid+'?token='+token)
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
      //   alert(JSON.stringify(error))
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
export function getUserById(userID) {
    return new Promise((resolve, reject) =>{
  
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
  }

export function register(email, nickname, password) {

    let passMd5 = getMD5(password.trim());
    let pass = getMD5(passMd5 + 'BSDN');

  const data = {
    email,
    nickname,
    passwordHash:pass
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
        // alert(JSON.stringify(error))
        reject(error);
    })
  })
}

export function getfans(uid) {
    return new Promise((resolve, reject) =>{axios.get('/api/follow/follower?id='+uid+'&offset=0&limit=9999')
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
      //   alert(JSON.stringify(error))
        reject(error);
    })
    })
  }

  export function getfavors(uid) {
    return new Promise((resolve, reject) =>{axios.get('/api/follow/following?id='+uid+'&offset=0&limit=9999')
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
      //   alert(JSON.stringify(error))
        reject(error);
    })
    })
  }


  export function getUsersByKeyword(sid,keyword) {

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
    return new Promise((resolve, reject) =>{axios.get('/api/user?&offset=0&sort='+sid+'&keyword='+keyword)
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
