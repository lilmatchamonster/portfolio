import React,{useState} from 'react';
import { Route, Link, NavLink } from "react-router-dom";
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css';
import styled from 'styled-components'
import beach from './imgs/beach-close-up-cold-1533720.jpg'
import beach_invert from './imgs/beach-close-up-cold-inverted.jpg'
import leaf from './imgs/leaf.jpg'
import leaf_invert from './imgs/leaf-inverted.jpg'
import berry from './imgs/galina-n-AgWVcQz1bOA-unsplash.jpg'
import berry_invert from './imgs/galina-n-AgWVcQz1bOA-unsplash-inverted.jpg'
import { red } from 'ansi-colors';


const theme = [
  {color: 'hsl(351, 28%, 52%)',  background: `url(${leaf})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
  {color: 'hsl(235, 9%, 47%)',  background: `url(${leaf_invert})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
  {color: 'hsl(235, 9%, 47%)',  background: `url(${beach})`, h1:{color: 'hsla(206, 19%, 59%, .19)'}},
  {color: 'hsl(351, 28%, 52%)',  background: `url(${beach_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
  {color: 'hsl(235, 9%, 47%)',  background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
  {color: 'hsl(351, 28%, 52%)',  background: `url(${berry_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}}
]


function App() {
  
  const [currentTheme, setcurrentTheme] = useState(0);
  const [toggleMenu, settoggleMenu] = useState(false);
  console.log(`Toggle: ${toggleMenu}`)

  const changeTheme = (set) => {
    setcurrentTheme(set)
    settoggleMenu(false)
  }
  const themeInvert = () => {
    const set = !toggleMenu;
    let current = currentTheme;
    if(set === true){
      current = current + 1
    }
    else{
      current = current - 1
    }
    settoggleMenu(set)
    setcurrentTheme(current)
  }
  
  const BgImag = styled.div`
    /* Adapt the colors based on primary prop */
    /* background: url(${props => props.primary ? leaf : leaf_invert}) no-repeat center center fixed; */
    /* background-color: ${props => props.primary ? '#f8f8f8' : '#070707'}; */
    /* color: ${props => props.primary ? 'hsla(351, 28%, 52%, .19)' : '#070707'}; */
    ${theme[currentTheme]}
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  `;

  return (
    <BgImag primary theme className="App">
      <Header changeTheme={changeTheme} currentTheme={currentTheme} themeInvert={themeInvert} theme={theme[currentTheme]} />
      <div>
        <Menu className="menu-position"changeTheme={changeTheme} />
        <Route exact path='/'component={About} />
        <Route path='/skills'component={Skills} />
        <Route path='/projects'component={Projects} />
      </div>
      <Footer />
    </BgImag>
  );
}

export default App;
