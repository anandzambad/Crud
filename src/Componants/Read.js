import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Read = () => {
    const [data, setData]=useState([])
    function getData (){
        axios.get('https://6396d1b786d04c763381a20b.mockapi.io/crud')
        .then((res)=>{
          console.log(res.data);
          setData(res.data)  
        })

   }
   function handleDelete(id){
    axios.delete(`https://6396d1b786d04c763381a20b.mockapi.io/crud/${id}`)
    .then(()=>{
        getData()
    })
   }
   const setToLocalStorage=(id, name, email)=>{
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
   } 


 useEffect (()=>{
    getData()
   },[])
   
  return (
    <div>
   <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      {
        data.map((eachData)=>{
            return(
                <>
                <tbody>
        <tr>
          <td>{eachData.id}</td>
          <td>{eachData.name}</td>
          <td>{eachData.email}</td>
          
       <td><Link to="/update"> <Button variant="success" onClick={()=>setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</Button></Link></td>
          <td><Button variant="danger" onClick={()=>handleDelete(eachData.id)}>Delete</Button></td>
        </tr>
      </tbody>
                
                </>
            )
        })
        }
    </Table>
  </div>
  )
}

export default Read