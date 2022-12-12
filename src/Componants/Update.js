import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {
  return (
    
    <Fragment>
        <h2>Update</h2>
    <Form className='container-fluid'>
    <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Name</Form.Label>
           <Form.Control type="Text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)} />
     </Form.Group>
     <Link to="/update"><Button variant="primary" type="submit" onClick={handelUpdate}>
           Update
    </Button></Link>
    
    </Form> 
    </Fragment>
  )
}

export default Update