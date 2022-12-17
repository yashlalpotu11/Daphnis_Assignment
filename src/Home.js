import React from 'react'
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Tag from "./components/Tag";
import styled from 'styled-components';
import FilterCard from './components/FilterCard';
import { Grid, Row} from 'react-flexbox-grid';
import ItemCards from './components/ItemCards';
import Data from "./constants/Data";

const maroon = "#630606";

const Main = styled.div`
    display:flex;
    align-items:center;
    margin-top:20px;
    padding-left:2%;
`
const Title = styled.div`
    font-size:24px;
    font-weight:600;
`
const Section = styled.div`
    display:flex;
    padding-left:2%;
    padding-right:2%;
    margin-top:20px;
    justify-content:space-between;
`
const Filters = styled.div`
    width:15%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`
const Cards = styled.div`
    width: 84%;
`

const Home = () => {

  const numberOfProduct = 128;  
  return (
    <>
    <Navbar />
    <Search />
    <Main>
        <div style={{marginRight:"10px", display:"flex", alignItems:"center"}}>
            <Title style={{marginRight:"10px"}}>Paracetamol</Title>
            <div>{`(${numberOfProduct} Products)`}</div>
        </div>
        <div style={{display:"flex", marginRight:"10px"}}>
            <Tag name = "Aceclofenac" />
            <Tag name = "500mg" />
        </div> 
        <div style={{color:maroon, fontWeight:"600",cursor:"pointer"}}>Remove All</div>
    </Main>
    <Section>
        <Filters>
            {Data.map((curr) => {
                return(
                    <FilterCard title = {curr.title} list = {curr.list} />
                )
            })}
        </Filters>
        <Cards>
            <Grid fluid>
                <Row>
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                </Row>
            </Grid>
        </Cards>
    </Section>
    </>
  )
}

export default Home;