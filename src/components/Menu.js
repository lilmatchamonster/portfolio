import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

const Menu = props => {
	const { history, settoggleMenu, toggleMenu } = props;
	console.log(props);

	const theme = {
		'/': {
			color: 'hsl(351, 28%, 52%)',
			h1: { color: 'hsla(351, 28%, 52%, .19)' },
		},
		'/projects': {
			color: 'hsl(235, 9%, 47%)',
			h1: { color: 'hsla(206, 56%, 23%, .19)' },
		},
		'/skills': {
			// color: 'hsl(235, 9%, 47%)',
			color: '#483432',
			h1: { color: 'hsla(206, 19%, 59%, .19)' },
		},
	};
	
	const StyledMenu = styled.div`
		display: flex;
		flex-direction: column;
		text-align: left;
		margin-left: 2%;
		position: absolute;
		z-index: 100;
		${theme[history.location.pathname]}
		a:link {
			color: ${theme[history.location.pathname].color};
		}
		a:visited {
			color: green;
		}
		a:hover {
			color: hotpink;
		}
		@media screen and (max-width: 800px) {
			margin-top: 5%;
		}
		
		@media screen and (max-width: 500px) {
			text-align: center;
			position: sticky;
			font-size: 2rem;
		}

		.links {
			&:visited {
				color: inherit;
			}
			margin: 20% 0;
			text-decoration: none;
			font-family: 'Crabmeal', arial;
			@media screen and (max-width: 500px) {
				margin: 1rem;
			}
		}
	`;
	return (
		<StyledMenu>
			<NavLink
				className='links'
				to='/'
				onClick={() => settoggleMenu(false)}
			>
				About
			</NavLink>
			<NavLink
				className='links'
				to='/projects'
				onClick={() => (toggleMenu ? props.themeInvert() : null)}
			>
				Projects
			</NavLink>
			<NavLink
				className='links'
				to='/skills'
				onClick={() => (toggleMenu ? props.themeInvert() : null)}
			>
				Skills
			</NavLink>
		</StyledMenu>
	);
};

export default Menu;
// {/* <NavLink className="links" to='/' onClick= {()=>props.changeTheme(0)}>About</NavLink>
// <NavLink className="links" to='/projects' onClick= {()=>props.changeTheme(4)}>Projects</NavLink>
// <NavLink className="links" to='/skills' onClick= {()=>props.changeTheme(2)}>Skills</NavLink> */}
