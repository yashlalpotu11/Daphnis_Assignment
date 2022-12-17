import React from 'react'
import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const maroon = "#630606";

const Container = styled.div`
    width:90%;
    height:3rem;
    display:flex;
    justify-content:space-between;
    align-item:center;
    padding-left:5%;
    padding-right:5%;
    background-color: ${maroon};
`
const List = styled.div`
    width:50%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Profile = styled.div`
    width:8%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Logo = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
    font-size:24px;
    color:white;
`
const Text = styled.div`
    color:white;
`

const Navbar = () => {
  return (
    <Container>
        <Logo>
            Medical Darpan
        </Logo>
        <List>
            <Text>Home</Text>
            <Text>Products</Text>
            <Text>Distributors</Text>
            <Text>Manufacturers</Text>
            <Text>About us</Text>
            <Text>Blog</Text>
        </List>
        <Profile>
            <Text>Login</Text>
            <Text style={{fontSize:"20px"}}><FontAwesomeIcon icon={faCircleUser} /></Text>
        </Profile>
    </Container>
  )
}

export default Navbar