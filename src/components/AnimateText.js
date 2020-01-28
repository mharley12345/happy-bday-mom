import React from 'react'
import TextLoop from 'react-text-loop'
import styled from 'styled-components'
import Counter from './Counter'
const AnimateText = (props) => {

    return (

           <Container>
            <h1>Happy  <Counter/>th Birthday
           
                {"   "} <TextLoop>
                 <span  style={{color:"red"}}>Mom</span>
                 <span  style={{color:"blue"}}>Kellie</span>
                </TextLoop>{"   "}
             Love
           {" "} <TextLoop>
                <span style={{color:"red"}} >Michael</span>
                <span style={{color:"blue"}}>Justin</span>
                <span style={{color:"red"}}>Kristopher</span>
                <span style={{color:"blue"}}>The Boys</span>
            </TextLoop>
            </h1>
            </Container>
  
    )
}
export default AnimateText

const Container = styled.div`
margin-top:40px;
font-size:30px
;

background-color: pink;
box-shadow: 40px 40px 40px black;

`
