import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Header = (props) => {
	console.log(props.toggleMenu)
	
	const StyledHeader = styled.div`
		h1 {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			height: 45px;
			border-radius: 2rem;
			background-color: ${props.theme.h1.color};
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