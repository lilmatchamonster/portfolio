import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css';

// const theme = [
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${leaf})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${leaf_invert})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${beach})`, h1:{color: 'hsla(206, 19%, 59%, .19)'}},
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${beach_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${berry_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}}
// ]


function App(props) {

  const [toggleMenu, settoggleMenu] = useState(false);

  const themeInvert = () => {
    const set = !toggleMenu;
    settoggleMenu(set)
  }

  return (
    <div primary theme className="App">
        <Header history={props.history} themeInvert={themeInvert} toggleMenu={toggleMenu} />
        <div>
          {toggleMenu ? <Menu className="menu-position" history={props.history} toggleMenu={toggleMenu} themeInvert={themeInvert}/> : null}
          <Route exact path='/' render={() => <About toggleMenu={toggleMenu} />} />
          <Route path='/skills'render={() => <Skills toggleMenu={toggleMenu} />} />
          <Route path='/projects'render={() => <Projects toggleMenu={toggleMenu} />} />
        </div>
        <Footer toggleMenu={toggleMenu} history={props.history}/>
      </div>
  );
}

export default App;