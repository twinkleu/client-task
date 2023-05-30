import React, {useState} from 'react'
import { FormGroup, FormControl, Typography, Button, Input, InputLabel, styled} from '@mui/material';
import { addUser } from '../service/api';
import {useNavigate} from "react-router-dom";


const Container = styled(FormGroup)`
     width: 50%;
     margin: 5% auto 0 auto;

     & > div{
        margin-top: 20px;
     }

`


const User = () => {

    const defaultValue = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }

    const[user, setUser] = useState(defaultValue) 
    const navigate = useNavigate(); 

 
    const onChangeInput = (e) =>{
         setUser({...user, [e.target.name]: e.target.value})
    }
    const addUserDetails = async() =>{
         await addUser(user);
         navigate("/all")
         
    }


  return (
    <Container>
        <Typography variant="h4">  Add Student</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name="name" onChange={(e) => onChangeInput(e)}/>
       </FormControl>

       <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name="username" onChange={(e) => onChangeInput(e)}/>
       </FormControl>

       <FormControl>
            <InputLabel>Emai</InputLabel>
            <Input name="email" onChange={(e) => onChangeInput(e)}/>
       </FormControl>

       <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input name="phone" onChange={(e) => onChangeInput(e)}/>
       </FormControl>
       <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>Add</Button>
       </FormControl>
      
    </Container>
  )
}

export default User
