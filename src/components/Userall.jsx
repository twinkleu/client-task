import React, { useState , useEffect} from 'react'
import { TableHead, TableBody , Table, TableCell, TableRow, Button} from '@mui/material';
import { deleteUser, getUser, getUsers } from '../service/api';
import {Link} from "react-router-dom";

const Userall = () => {

    const[users, setUsers] = useState([]);

    useEffect(() => {
         getAllUsers();
    },[])

    const getAllUsers =async () =>{
        const response = await getUsers();
        setUsers(response.data);
        console.log(response)
         }

    const deleteUserDetails = async(id) =>{
        await deleteUser(id);
        getAllUsers();
    }

  return (
    <Table>
        <TableHead>
           <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
           </TableRow>
        </TableHead>


        <TableBody>
               { users.map(user => (
                 <TableRow key={user._id}>
                       <TableCell>{user.name}</TableCell>
                       <TableCell>{user.username}</TableCell>
                       <TableCell>{user.email}</TableCell>
                       <TableCell>{user.phone}</TableCell>
                       <TableCell>
                        <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button variant="contained" onClick={() => deleteUserDetails(user._id)} >Delete</Button>
                       </TableCell>
                 </TableRow>
               ))}
        </TableBody>
      
    </Table>
  )
}

export default Userall
