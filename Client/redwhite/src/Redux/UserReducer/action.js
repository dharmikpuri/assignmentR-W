import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType"
import axios from "axios"
export const  userregister = (data)=> (dispatch)=> {
    // console.log(data);
      dispatch({type:REGISTER_REQUEST})
    return  axios.post("http://localhost:8080/user/register" , data)
      .then((res) => {
        console.log(res)
         dispatch({type:REGISTER_SUCCESS, payload:res.data.message})
      })
      .catch((err) => dispatch({type:REGISTER_FAILED}))
 }


 export const getLoginUser =(data)=>  (dispatch)=> {
    console.log(data,"sadfasdfs");
// 
    dispatch({type:LOGIN_REQUEST})
   return  axios.post("http://localhost:8080/user/login", data)
     .then((res) => {
        console.log(res,'res');
       dispatch({type:LOGIN_SUCCESS, payload:res.data})
     })
     .catch((err)=> dispatch({type:LOGIN_FAILED}))
 }
