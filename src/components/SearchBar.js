import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const teal = "#54BAB9";

const Container = styled.div`
    height:2.5rem;
    width:100%;
    display:flex;
    align-items:center;
`
const Input = styled.input`
    height:1.7rem;
    padding:5px;
    padding-left:35px;
    width:30%;
    font-size:20px;
`
const Button = styled.div`
    height:50%;
    cursor:pointer;
    font-size:18px;
    background-color: ${teal};
    padding:10px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    align-items:center;
    color:white;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    border: 1px solid black;
    border-left: 0;
`

const SearchBar = () => {
  return (
    <Container style={{marginTop:"10px"}}>
       <FontAwesomeIcon style={{marginRight:"-25px", marginLeft:"10px", zIndex:"10"}} icon={faSearch} /> 
       <Input type='text' placeholder='Paracetamol' />
       <Button>Search</Button>
    </Container>
  )
}

export default SearchBar