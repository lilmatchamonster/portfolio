import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Menu = (props) => {

  const theme = {
		"/" : {color: 'hsl(351, 28%, 52%)', h1:{color: 'hsla(351, 28%, 52%, .19)'}},
		"/projects" : {color: 'hsl(235, 9%, 47%)', h1:{color: 'hsla(206, 56%, 23%, .19)'}},
		"/skills" : {color: 'hsl(235, 9%, 47%)',  h1:{color: 'hsla(206, 19%, 59%, .19)'}}
	}
    
	const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 2%;
    position: absolute;
    z-index: 100;
    ${theme[props.history.location.pathname]}

    .links {
      &:visited {
        color: inherit;
      }
      margin: 20% 0;
      text-decoration: none;
      font-family: 'Crabmeal', arial;
    }
	`;
	return ( 
		<StyledMenu>
      <NavLink className="links" to='/' onClick= {()=> props.toggleMenu ? props.themeInvert() : null}>About</NavLink>
      <NavLink className="links" to='/projects' onClick= {()=> props.toggleMenu ? props.themeInvert() : null}>Projects</NavLink>
      <NavLink className="links" to='/skills' onClick= {()=> props.toggleMenu ? props.themeInvert() : null}>Skills</NavLink>
		</StyledMenu>
	)
}

export default Menu
// {/* <NavLink className="links" to='/' onClick= {()=>props.changeTheme(0)}>About</NavLink>
// <NavLink className="links" to='/projects' onClick= {()=>props.changeTheme(4)}>Projects</NavLink>
// <NavLink className="links" to='/skills' onClick= {()=>props.changeTheme(2)}>Skills</NavLink> */}