import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import AlertDismissibleExample from './alert'

export default function Users(){
    const [mode, setMode]=useState('online')
    const [data,setdata]=useState([])
    useEffect(()=>{
 let url='https://jsonplaceholder.typicode.com/users'
 fetch(url).then((res)=>{
    res.json().then((result)=>{
        console.warn('result',result)
        setdata(result)
        localStorage.setItem('users',JSON.stringify(result))
    })
}).catch(e=>{
    let connection=localStorage.getItem('users')
    setdata(JSON.parse(connection))
    setMode('offline')
})
    },[])
    return(
        <div>
            <div>
                {
                    mode==='offline'?
                   <AlertDismissibleExample/>:
                    null
                }
            </div>
             <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
      {
          data.map((item,i)=>(
            <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
          </tr>
          ))
      }
    
   
  </tbody>
</Table>
        </div>
    )
}