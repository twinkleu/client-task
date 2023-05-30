import React, {useState, useEffect} from 'react'
import { FormGroup, FormControl, Typography, Button, Input, InputLabel, styled} from '@mui/material';
import { editUser, getUser } from '../service/api';
import {useNavigate, useParams} from "react-router-dom";


const Container = styled(FormGroup)`
     width: 50%;
     margin: 5% auto 0 auto;

     & > div{
        margin-top: 20px;
     }

`


const EditUser = () => {

    const defaultValue = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }

    const[user, setUser] = useState(defaultValue) 
    const navigate = useNavigate(); 
 
    const {id}  = useParams();

    useEffect(() =>{
        loadUserDeatils()
    },[])

    const loadUserDeatils = async(id) =>{
        const response = await getUser(id);
        setUser(response.data);
    }

 
    const onChangeValue = (e) =>{
         setUser({...user, [e.target.name]: e.target.value})
    }
    const editUserDetails = async() =>{
         const response = await editUser(user, id);
         setUser(response.data);
         navigate("/all")
         
    }


  return (
    <Container>
        <Typography variant="h4">Edit Student</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name="name" onChange={(e) => onChangeValue(e)} vaue={user.name}/>
       </FormControl>

       <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name="username" onChange={(e) => onChangeValue(e)} value={user.username}/>
       </FormControl>

       <FormControl>
            <InputLabel>Emai</InputLabel>
            <Input name="email" onChange={(e) => onChangeValue(e)}  value={user.email}/>
       </FormControl>

       <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input name="phone" onChange={(e) => onChangeValue(e)}  value={user.phone}/>
       </FormControl>
       <FormControl>
        <Button variant="contained" onClick={ () => editUserDetails()}>Edit</Button>
       </FormControl>
      
    </Container>
  )
}
export default EditUser;
