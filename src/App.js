import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Menu from './components/Menu'
import Footer from './components/Footer'
import leaf from './imgs/leaf.jpg'
import leaf_invert from './imgs/leaf-inverted.jpg'
import './App.css';


function App(props) {
  const { location, history } = props
  const [toggleMenu, settoggleMenu] = useState(false);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  
  const themeInvert = () => {
    const set = !toggleMenu;
    settoggleMenu(set)
  }
  
  return (
    <div className="App">
        <Header history={history} themeInvert={themeInvert} toggleMenu={toggleMenu} />
        <div>
          {toggleMenu ? <Menu className="menu-position" history={history} settoggleMenu={settoggleMenu} toggleMenu={toggleMenu} themeInvert={themeInvert}/> : null}
          {transitions.map(({item: location, props, key })=>(
            <animated.div key={key} style={props}>
              <Switch location={location}>
                <Route exact path='/' render={() => <About toggleMenu={toggleMenu} />} />
                <Route path='/skills' render={() => <Skills toggleMenu={toggleMenu} />} />
                <Route path='/projects' render={() => <Projects toggleMenu={toggleMenu} themeInvert={themeInvert}/>} />
              </Switch>
            </animated.div>
          ))}
        </div>
        <Footer toggleMenu={toggleMenu} history={history}/>
      </div>
  );
}

// export default withRouter(App);
export default App;

// const theme = [
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${leaf})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${leaf_invert})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${beach})`, h1:{color: 'hsla(206, 19%, 59%, .19)'}},
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${beach_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${berry_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}}
// ]