import request from '@/request'
import axios from 'axios'
export function upload(formdata,token) {
    return new Promise((resolve, reject) =>{axios.post('/api/file?token='+token, formdata,{
      headers:{
         "Content-Type": "multipart/form-data" 
      }
    })
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
        alert("bad")
        reject(error);
    })
    })


}
