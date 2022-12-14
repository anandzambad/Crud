import React, { useState, Fragment } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();
    const header = { "Access-Control-Allow-Origin": "" };
    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post("https://6396d1b786d04c763381a20b.mockapi.io/crud",
            {
                name: name,
                email: email,
            },
            header
        )
            .then(() => {
                history('/read')
            })
        // history('/read')
    }
    return (
        <Fragment>
           
            <div className='d-flex justify-content-between m-2'>
                <h2>Create</h2>
                <Link to="/read" >
                <button className='btn btn-info'>Show Records</button></Link>
            </div>
            <Form className='container-fluid'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="Text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handelSubmit}>
                    Submit
                </Button>
            </Form>
        </Fragment>
    )
}

export default Create