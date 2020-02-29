import React from 'react';
import styled from 'styled-components';
import berry from '../imgs/galina-n-AgWVcQz1bOA-unsplash.jpg'
import berry_invert from '../imgs/galina-n-AgWVcQz1bOA-unsplash-inverted.jpg'

const Projects = (props) => {
  console.log(props)
  const curTheme = props.toggleMenu ? 'b' : 'a';

  const theme={
    a: {color: 'hsl(235, 9%, 47%)',  background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
    b: {color: 'hsl(351, 28%, 52%)',  background: `url(${berry_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}}
  }

  const ProjectSyles = styled.div`
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
    <ProjectSyles>
      <h1>Projects Component</h1>
    </ProjectSyles>
  )
}

export default Projects