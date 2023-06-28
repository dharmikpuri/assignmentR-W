import { PRODUCT_FAILED, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";

const initstate = {
   products:[],
   loading:false,
   error:false
  };

  export const reducer =(state=initstate , {type,payload})=> {
    switch(type){
       case PRODUCT_REQUEST : return {...state , loading:true}
       case PRODUCT_SUCCESS : return {...state , loading:false, products:payload}
       case PRODUCT_FAILED : return {...state , loading:false , error:true}
       default: return state
   }
}
