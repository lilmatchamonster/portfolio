import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Header = (props) => {
	console.log(props.toggleMenu)

	const theme = {
		"/" : `hsla(351, 28%, 52%, .19)`,
		"/projects" : `hsla(206, 56%, 23%, .19)`,
		"/skills" : `hsla(206, 19%, 59%, .19)`
	}

	const StyledHeader = styled.div`
		h1 {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			height: 45px;
			border-radius: 2rem;
			background-color: ${theme[props.history.location.pathname]};
			color: ${theme[props.history.location.pathname]};
			margin: 1% auto;
			z-index: 1;
		}
	`
	return ( 
		<StyledHeader>
			<h1 onClick={props.themeInvert}><FontAwesomeIcon icon={props.toggleMenu ? faTimes : faBars} size="sm" /></h1>
		</StyledHeader>
	)
}

export default Header