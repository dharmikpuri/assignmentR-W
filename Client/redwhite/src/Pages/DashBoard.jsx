import { Button, Input, border, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Form } from 'react-router-dom';
const DashBoard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [edititem , setedititem] = useState()
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

  const handleDelete=(id)=>{
    axios(`http://localhost:8080/product/delete/${id}`, {
        method: "delete",
      })
        .then((res) => {
          alert(res.data.message);
          getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const handleEdit=(el)=>{
    setedititem(el)
    onOpen()
  }

  
    const handlechange = (e) => {
        const { name, value } = e.target;
        setedititem({ ...edititem, [name]: value });
      };

      const handlesubmit = (e) => {
        e.preventDefault();
        console.log(edititem);
       
        axios(`http://localhost:8080/user/update/${edititem._id}`, {
          method: "patch",
          data: edititem,
        }).then((res) =>{
           alert(res.data.message)
          getProducts()
        })
      };
 

  return (
    <>
    
      <h1>WELCOME TO ADMIN PAGE</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", alignItems:"center"}}>
        {data.map((el)=>{
          // <h1>Hello Product Page</h1>
          // console.log(el)
        return  <div>
          <img src={el.image} alt="img" width={"300px"}  style={{alignItems:"center",margin:"auto"}}/>
          <h1>{el.title}</h1>
          <h2>{el.category}</h2>
          <h2>{el.price}</h2>
          <h2>{el.desc}</h2>
          <button onClick={()=>handleDelete(el._id)} style={{margin:"5px", border:"2px solid red",padding:"10px"}}>Delete</button>
          <button onClick={()=> handleEdit(el)} style={{margin:"5px", border:"2px solid red",padding:"10px"}}>Edit</button>
          </div>
        })}
    </div>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
           {/* <form onSubmit={handlesubmit}>
            <input type="text" value={edititem.title} name="title" onChange={(e)=>handlechange(e)}/>
            <input type="text" value={edititem.image} name="image" onChange={handlechange}/>
            <input type="text" value={edititem.price} name="price" onChange={handlechange}/>
            <input type="text" value={edititem.category} name="category" onChange={handlechange}/>
            <input type="text" value={edititem.desc} name="desc" onChange={handlechange}/>
            <input type="submit"  value="SUBMIT"/>
           </form> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    
  )
}

export default DashBoard