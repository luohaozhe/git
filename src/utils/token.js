//暴露函数
//本地存储持家化存储token
export const setToken = (token)=>{
   localStorage.setItem('TOKEN',token);
}

//清除token
export const clearToken =()=>{
   localStorage.removeItem('TOKEN');
}

//获取本地存储的token
export const getToken = ()=>{
   return localStorage.getItem('TOKEN');
}