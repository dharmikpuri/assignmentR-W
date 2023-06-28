import axios from "axios"
import { PRODUCT_FAILED, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType"
export const  getProduct =  (dispatch)=> {
    // console.log(data);
      dispatch({type:PRODUCT_REQUEST})
    return  axios.get("http://localhost:8080/products")
      .then((res) => {
        // console.log(res)
         dispatch({type:PRODUCT_SUCCESS, payload:res.data})
      })
      .catch((err) => dispatch({type:PRODUCT_FAILED}))
 }