import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'
import Banner from "../assets/images/itemImg.jpg"

const Card = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:10px;
    border:1px solid black;
    border-bottom: 15px solid #630606;
    padding:10px;
    padding-bottom:0;
    margin-bottom:10px;
    background-color:white;
`
const Contact = styled.div`
    height:2.6rem;
    width:105%;
    border-top:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-weight:500;
    color:#54BAB9;
    cursor:pointer;
    
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`

const ItemCards = () => {
  return (
    <Col xs={6} md={4}>
    <Card>
        <div style={{marginBottom:"10px", width:"100%", height:"50%"}}>
            <Image src={Banner} alt="medicin" />
        </div>
        <div style={{fontWeight:"700", fontSize:"17px", marginBottom:"5px"}}>Favipiravir 400mg (FabiFlu) tablets</div>
        <div style={{marginBottom:"20px"}}><span style={{fontWeight:"700", fontSize:"18px",color:"#630606"}}>Rs 1770</span> / stripe</div>
        <div style={{fontWeight:"500", fontSize:"15px", marginBottom:"5px"}}>Glenmark Pharmaceutical Limited</div>
        <div style={{textTransform:"uppercase", fontSize:"12px", marginBottom:"20px"}}>parvat patiya, surat, gujrat</div>
        <Contact>
            <div>
            <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            &nbsp;&nbsp; 
            <div>
            Contact Supplier
            </div>
        </Contact>
    </Card>
    </Col>
  )
}

export default ItemCards