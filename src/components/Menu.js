import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Menu = (props) => {
	console.log(props.theme)
	const currenttheme = props.currentTheme;
	
	const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 2%;
    position: absolute;
    z-index: 100;

    .links {
      &:visited {
        color: inherit;
      }
      margin: 20% 0;
      text-decoration: none;
      font-family: 'Crabmeal', arial;

    }
	`
	return ( 
		<StyledMenu>
      <NavLink className="links" to='/' onClick= {()=>props.changeTheme(0)}>About</NavLink>
      <NavLink className="links" to='/projects' onClick= {()=>props.changeTheme(4)}>Projects</NavLink>
      <NavLink className="links" to='/skills' onClick= {()=>props.changeTheme(2)}>Skills</NavLink>
		</StyledMenu>
	)
}

export default Menu