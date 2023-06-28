import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType"

const initstate = {
    token:"",
    loading:false,
    error:false,
    message:"",
    role:"",
    username:"",
     auth:false 
}
export const reducer =(state=initstate , {type,payload})=> {
    console.log(payload)
     switch(type){
        case REGISTER_REQUEST : return {...state , loading:true}
        case REGISTER_SUCCESS : return {...state , loading:false, message:payload}
        case REGISTER_FAILED : return {...state , loading:false , error:true}
        case LOGIN_REQUEST : return {...state , loading:true}
        case LOGIN_SUCCESS: return {...state , loading:false, auth:payload.role=="admin" ? true : false, message:payload.message, role:payload.role, username:payload.username , token:payload.token}
        case LOGIN_FAILED: return {...state , loading:false , error:true}
        default: return state
    }
} 