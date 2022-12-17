import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const teal = "#54BAB9";

const Tagbox = styled.div`
    height:20px;
    color:white;
    background-color:${teal};
    padding:5px;
    padding-left:10px;
    padding-right:10px;
    border-radius:3px;
    margin-right:10px;
    display:flex;
    align-items:center;
`

const Tag = ({name}) => {
  return (
    <Tagbox>{name}&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon style={{cursor:"pointer"}} icon={faXmark} /></Tagbox>
  )
}

export default Tag