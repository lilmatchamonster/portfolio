import React from 'react';
import styled from 'styled-components'
const Footer = (props) => {
    const theme = {
        "/" : {color: 'hsl(351, 28%, 52%)', h1:{color: 'hsla(351, 28%, 52%, .19)'}},
        "/skills" : {color: 'hsl(235, 9%, 47%)', h1:{color: 'hsla(206, 19%, 59%, .19)'}},
        "/projects" : {color: 'hsl(235, 9%, 47%)', h1:{color: 'hsla(206, 56%, 23%, .19)'}},
    }
    const invert = {
        "/" : {color: 'hsl(235, 9%, 47%)', h1:{color: 'hsla(206, 56%, 23%, .19)'}},
        "/skills" : {color: 'hsl(351, 28%, 52%)', h1:{color: 'hsla(351, 28%, 52%, .19)'}},
        "/projects" : {color: 'hsl(351, 28%, 52%)', h1:{color: 'hsla(351, 28%, 52%, .19)'}}
    }

    const Logo = styled.div`
        font-family: 'Densmore', arial;
        /* color: hsla(351, 28%, 52%, .19); */
        font-size: 2.2em;
        font-weight: 100; 
        position: fixed;
        bottom: 2%;
        left: 2%;
        ${props.toggleMenu ? invert[props.history.location.pathname] : theme[props.history.location.pathname]};
        span{
            font-size: 2.4em;
        }
        h1{
            margin: 0;
            padding: 0;
            pointer-events: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
            @media screen and (max-width: 620px) {
                display: none;
            }
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
    return (
            <Logo>
                <h1 className="name">
                    <span>M</span>idori <span>F</span>ukuda
                </h1>
                <p className="whiteName">Ashley Owens</p>
            </Logo>
    )
}

export default Footer;