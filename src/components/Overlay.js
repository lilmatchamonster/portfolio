import React from 'react';
import styled from 'styled-components';

const Overlay = (props) => {
  console.log(props.toggleMenu)
  let enabled = props.toggleMenu

  const StyledOverlay = styled.div`
    box-sizing: border-box;
    border: 1px solid red;
    border-radius: ${enabled === true ? '0' : '0 0 50%'};
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    width: ${enabled === true ? '100%' : '0'};
    height: ${enabled === true ? '100%' : '0'};
    opacity: ${enabled === true ? '1' : '0'};
    transition: all 2s;
  `
	return ( 
    <StyledOverlay >
      hi
    </StyledOverlay>
	)
}

export default Overlay