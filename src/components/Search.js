import React from 'react'
import styled from 'styled-components';
import Bar from "./SearchBar";

const Container = styled.div`
    padding-left:2%;
    margin-top:10px;
`

const Search = () => {
  return (
    <Container>
        <div style={{}}>Medical Darpan {`>`} Search {`>`} <span style={{fontWeight:"600"}}>Febiflu Tablet</span></div>
        <Bar />
    </Container>
  )
}

export default Search;