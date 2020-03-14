import React from 'react';
import styled from 'styled-components';
import berry from '../imgs/galina-n-AgWVcQz1bOA-unsplash.webp'
import berry_invert from '../imgs/galina-n-AgWVcQz1bOA-unsplash-inverted.webp'
import '../App.css';

const ProjectCard = (props) => {
  const { toggleMenu, description, pic, title, link, hub, stacks } = props
  const curTheme = toggleMenu ? 'b' : 'a';
  const theme={
    a:{color: 'hsl(235, 9%, 47%)', background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
    b:{color: 'hsl(351, 28%, 52%)', background: `url(${berry_invert})`}
  }

  const CardSyles = styled.div`
    width: 25%;
    display: flex;
    
    img {
      display: inline-block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      position: relative;
      top: -1rem;    
      left: -1rem;
    }
    .card {
      display: flex;
      padding-right: 7%;
      margin: 4%;
      width: 90%;
      min-width: 305px;
      min-height: 269px;
      /* height: 16.8em; */
      height: 91%;
      background-color: hsla(206, 56%, 23%, .3);
      /* background-color: rgba(145,171,196, .5); */
      /* background-color: hsla(206, 56%, 23%, .17); */
      color: #FFFFFF;
      /* color: #0c2b31; */
      text-align: left;
      font-size: 1rem;
      font-weight: 500;        
      text-shadow: 1px 1px darkolivegreen;
      /* text-shadow: 1px 1px silver; */
      border: 1px solid white;
      transition: background-color .75s, color .75s, border .75s;
      
      a {
        color: inherit;
        text-decoration: none;
      }
      a:link {
        color: inherit;
      }
      a::after {
        color: inherit;
      }
    }
    .card:hover{
      border: 1px solid hsla(206, 56%, 23%, .17);
      background-color: hsla(0, 0%, 100%, .7);
      color: #792F52;

      a:link {
        text-decoration: underline;
      }
      
      p{
        display: inline;
      }
      .test {
        font-size: 0;
      }
      .test:after {
        content: attr(data-hover);
        font-size: 1rem;
      }
    }
    
  `;
  return (
    <CardSyles style={props} >
      <div className={'card'}>
        <img src={pic} alt="Ila" />
        <div>
          <a href={link} target={'_blank'}><h3>{title}</h3></a>
          <p className={'test'} data-hover={stacks}>{description}</p>
          <a className={'test'} href={hub} target={'_blank'} data-hover="Github"> </a>
        </div>
      </div>
    </CardSyles>
  )
}

export default ProjectCard