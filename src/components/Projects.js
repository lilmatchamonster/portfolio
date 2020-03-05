import React from 'react';
import { Transition } from "react-spring/renderprops";
import styled from 'styled-components';
import berry from '../imgs/galina-n-AgWVcQz1bOA-unsplash.jpg'
import berry_invert from '../imgs/galina-n-AgWVcQz1bOA-unsplash-inverted.jpg'
import ila from '../imgs/Ila 2.jpg';
import '../App.css';

const Projects = (props) => {
  const { toggleMenu } = props
  const curTheme = toggleMenu ? 'b' : 'a';

  const theme={
    a:{color: 'hsl(235, 9%, 47%)', background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
    b:{color: 'hsl(351, 28%, 52%)', background: `url(${berry_invert})`}
  }

  const ProjectSyles = styled.div`
    /* ${theme[curTheme]} */
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover !important;
    background-repeat: no-repeat;
    padding-top: 3.5%;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;

    .projects {
      img {
        width: 150px;
        border-radius: 50%;
      }
      fieldset {
        text-align: left;
        border: 1px solid white;
      }
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
              <fieldset> 
                <legend><img src={ila} alt="Ila" /></legend>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
              </fieldset>
            </div>
          </ProjectSyles>
        </div>
      }
    </Transition>
  )
}

export default Projects