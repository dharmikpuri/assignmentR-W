import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data, setdata] = useState([]);
  const getProducts = () => {
    axios
      .get(`http://localhost:8080/product`)
      .then((res) => {
        // console.log(res.data,"aaa")
        setdata(res.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
 getProducts()
  },[])

  return (
    
    <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", alignItems:"center"}}>
        {data.map((el)=>{
          // <h1>Hello Product Page</h1>
          // console.log(el)
        return  <div>
          <img src={el.image} alt="img" width={"300px"} style={{alignItems:"center"}}/>
          <h1>{el.title}</h1>
          <h2>{el.category}</h2>
          <h2>{el.price}</h2>
          <h2>{el.desc}</h2>
          </div>
        })}
    </div>
  )
}

export default Product