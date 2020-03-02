import React from 'react';
import { Transition } from "react-spring/renderprops";
import styled from 'styled-components';
import beach from '../imgs/beach-close-up-cold-1533720.jpg'
import beach_invert from '../imgs/beach-close-up-cold-inverted.jpg'


const Skills = (props) => {
  const { toggleMenu } = props
  let curTheme = toggleMenu ? 'b' : 'a';

  const theme={
    a: {color: 'hsl(235, 9%, 47%)',  background: `url(${beach})`, h1:{color: 'hsla(206, 19%, 59%, .19)'}},
    b: {color: 'hsl(351, 28%, 52%)',  background: `url(${beach_invert})`}
  }

  const SkillsSyles = styled.div`
    border: 2px solid orange;
    box-sizing: border-box;
    /* ${theme[curTheme]} */
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
          <SkillsSyles style={theme['b']}>
            <div></div>
          </SkillsSyles>
         </div>
        :
        props => 
        <div style={props}>
          <SkillsSyles style={theme['a']}>
            <h1 style={{color: 'hsla(351, 28%, 52%, .19)'}}>Skills Component</h1>
          </SkillsSyles>
         </div>
      }
    </Transition>
  )
}

export default Skills