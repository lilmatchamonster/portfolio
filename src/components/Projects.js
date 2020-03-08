import React from 'react';
import ProjectCard from './ProjectCard';
import { Transition } from "react-spring/renderprops";
import styled from 'styled-components';
import berry from '../imgs/galina-n-AgWVcQz1bOA-unsplash.jpg'
import berry_invert from '../imgs/galina-n-AgWVcQz1bOA-unsplash-inverted.jpg'
import ila from '../imgs/Ila 2.jpg';
import vendme from '../imgs/vendme.ico';
import spacequest from '../imgs/spacequestlogo-03.svg';
import '../App.css';

const Projects = (props) => {
  const { toggleMenu } = props
  const curTheme = toggleMenu ? 'b' : 'a';

  const theme={
    a:{color: 'hsl(235, 9%, 47%)', background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
    b:{color: 'hsl(351, 28%, 52%)', background: `url(${berry_invert})`}
  }

  const myProjects = [
    {
      pic: `${vendme}`,
      title: 'Vendme',
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description: 'lppp'
    },
    {
      pic: `${spacequest}`,
      title: 'SpaceQuest9',
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description: ''
    },
    {
      pic: `${ila}`,
      title: 'Unknown',
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description: ''
    }
  ]

  const ProjectSyles = styled.div`
    /* ${theme[curTheme]} */
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover !important;
    background-repeat: no-repeat;
    background-attachment: fixed !important;
    padding-top: 3.5%;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    
    .projects {
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
          <ProjectSyles style={theme['b']}>
            <div></div>
          </ProjectSyles>
        </div>
        :
        props => 
        <div style={props}>
          <ProjectSyles style={theme['a']}>
            <h1 style={{color: 'hsla(206, 56%, 23%, .19)'}}>Projects Component</h1>
            <div className={'projects'}>
              {myProjects.map((card, i) => (
                <ProjectCard key={i} description={card.description} pic={card.pic} title={card.title} short={card.short}/>
              ))}
            </div>
          </ProjectSyles>
        </div>
      }
    </Transition>
  )
}

export default Projects