import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Header = (props) => {
	console.log(props.theme)
	const currenttheme = props.currentTheme;
	
	const StyledHeader = styled.div`
		border: 1px solid black;
		/* section {
			display: flex;
			flex-direction: column;
			text-align: left;
			border: 1px solid black;
			padding: 0 0 0 2%;
			width: min-content;

			.links {
				&:visited {
					color: inherit;
				}
				margin: 5% 0;
				text-decoration: none;
				font-family: 'Crabmeal', arial;

			}
		} */
		h1 {
			width: 45px;
			height: 45px;
			border-radius: 2rem;
			background-color: ${props.theme.h1.color};
			margin: 1% auto;
		}
	`
	return ( 
		<StyledHeader>
			<h1 onClick={props.themeInvert}>#</h1>
			{/* <section>
				<NavLink className="links" to='/' onClick= {()=>props.changeTheme(0)}>About</NavLink>
				<NavLink className="links" to='/skills' onClick= {()=>props.changeTheme(2)}>Skills</NavLink>
				<NavLink className="links" to='/projects' onClick= {()=>props.changeTheme(4)}>Projects</NavLink>
			</section> */}
		</StyledHeader>
	)
}

export default Header