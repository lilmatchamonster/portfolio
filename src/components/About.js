import React from 'react';
import { Transition } from "react-spring/renderprops";
import styled from 'styled-components';
import leaf from '../imgs/leaf.jpg'
import leaf_invert from '../imgs/leaf-inverted.jpg'
import '../App.css';

const About = (props) => {
  const { toggleMenu } = props
  let curTheme = toggleMenu ? 'b' : 'a';
  
  const theme={
    a:{color: 'hsl(351, 28%, 52%)',  backgroundImage: `url(${leaf})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
    b:{color: 'hsl(235, 9%, 47%)',  backgroundImage: `url(${leaf_invert})`},
  }
  
  const AboutSyles = styled.div`
    border: 2px solid orange;
    box-sizing: border-box;
    /* ${theme[curTheme]} */
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 3.5%;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  `;
  return (
    <Transition
      items={toggleMenu} 
      from={{ opacity: 0 }} 
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {toggleMenu => 
        toggleMenu ? 
        props => 
        <div style={props}>
          <AboutSyles style={theme['b']}>
            <div></div>
          </AboutSyles>
         </div>
        :
        props => 
        <div style={props}>
          <AboutSyles style={theme['a']}>
            <h1 style={{color: 'hsla(351, 28%, 52%, .19)'}}>About Component</h1>
          </AboutSyles>
         </div>
      }
    </Transition>
  )
}


export default About