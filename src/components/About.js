import React, { useState } from 'react';
import styled from 'styled-components';
import leaf from '../imgs/leaf.jpg'
import leaf_invert from '../imgs/leaf-inverted.jpg'

const About = (props) => {
  console.log(props)
  const curTheme = props.toggleMenu ? 'b' : 'a';

  const theme={
    a:{color: 'hsl(351, 28%, 52%)',  background: `url(${leaf})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
    b:{color: 'hsl(235, 9%, 47%)',  background: `url(${leaf_invert})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
  }
  console.log(theme[curTheme]) 
  const AboutSyles = styled.div`
    border: 2px solid orange;
    box-sizing: border-box;
    ${theme[curTheme]}
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  `;
  return (
    <AboutSyles>
      <h1>About Component</h1>
    </AboutSyles>
  )
}


export default About