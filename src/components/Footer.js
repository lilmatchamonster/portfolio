import React from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components'

const Logo = styled.div`
	font-family: 'Densmore', arial;
	/* color: hsla(351, 28%, 52%, .19); */
	font-size: 2.2em;
	font-weight: 100; 
	position: fixed;
	bottom: 2%;
	left: 2%;
	
	span{
		font-size: 2.4em;
	}
	h1{
		margin: 0;
		padding: 0;
	}
	p{
		/* color: hsl(351, 28%, 52%); */
		font-family: 'Crabmeal', arial;
		font-size: .55em;
		text-align: right;
		position: relative;
		top: -2em;
		margin: 0;
		padding: 0;
	}
`;

const Footer = () => {
	return (
		<div>
			<Logo>
				<h1><span>M</span>idori <span>F</span>ukuda</h1>
				<p>Ashley Owens</p>
			</Logo>
		</div>
	)
}

export default Footer