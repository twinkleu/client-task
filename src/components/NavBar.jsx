import React from 'react'
import {AppBar, Toolbar, styled}from '@mui/material';
import {NavLink} from "react-router-dom"


const Header = styled(AppBar)`
background-color: lightblue;

`
const Tabs = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
  color: black;
`

const NavBar = () => {

  return (
    <Header position="static">
        <Toolbar>
            <Tabs to="/">Home</Tabs>
            <Tabs to="/add">Add Student</Tabs>
            <Tabs to="/all">All Students</Tabs>
        </Toolbar>
      
    </Header>
  )
}

export default NavBar
