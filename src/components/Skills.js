import React from 'react';
import styled from 'styled-components';
import beach from '../imgs/beach-close-up-cold-1533720.jpg'
import beach_invert from '../imgs/beach-close-up-cold-inverted.jpg'


const Skills = (props) => {
  const curTheme = props.toggleMenu ? 'b' : 'a';

  const theme={
    a: {color: 'hsl(235, 9%, 47%)',  background: `url(${beach})`, h1:{color: 'hsla(206, 19%, 59%, .19)'}},
    b: {color: 'hsl(351, 28%, 52%)',  background: `url(${beach_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
  }

  const SkillsSyles = styled.div`
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
    <SkillsSyles>
      <h1>Skills Component</h1>
    </SkillsSyles>
  )
}

export default Skills