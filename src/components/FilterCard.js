import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    width:100%;
    margin-bottom:10px;
`
const Title = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:5px;
    font-size:18px;
    font-weight:500;
    background-color:#D8D8D8;
    text-align:center;
`
const List = styled.div`
    display:flex;
    flex-direction:column;
    padding:5px;
    padding-left:15px;
    paddng-right:15px;
    background-color:white;
`
const ListItem = styled.div`
    margin-bottom:10px;
`

const FilterCard = ({title, list}) => {
    
  return (
    <Main>
        <Title>{title}</Title>
        <List>
            {list.map((curr) => {
                return(
                    <ListItem>{curr}</ListItem>
                )
            })}
        </List>
    </Main>
  )
}

export default FilterCard