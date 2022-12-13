import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Update () {

const [id, setId]= useState(0);
const [name, setName]= useState("");
const [email, setEmail]= useState("");
const navigate= useNavigate();

useEffect(() => {
 setId(localStorage.getItem("id"));
 setName(localStorage.getItem("name"));
 setEmail(localStorage.getItem("email"));
}, [])

function handleUpdate(e){
  e.preventDefault();
  axios.put(`https://6396d1b786d04c763381a20b.mockapi.io/crud/${id}`,
  {
    name: name,
    emai: email,
  })
  .then(()=>{
    navigate("/read");
  });

}


  return (
 <>
    <h2>Update</h2>

    <Form className='container-fluid'>
    <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Name</Form.Label>
           <Form.Control type="Text" placeholder="Name" value={name}
            onChange={(e)=>setName(e.target.value)} 
            />
            </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" value={email}
           onChange={(e)=>setEmail(e.target.value)}
            />
     </Form.Group>
     <Button variant="primary" type="update" onClick={handleUpdate}>
           Update
    </Button>
    
    </Form> 

  </>
        

  )
}

export default Update