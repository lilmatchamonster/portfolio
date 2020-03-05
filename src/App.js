import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { Transition, animated } from "react-spring/renderprops";
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css';


function App(props) {
  const { history } = props
  let location = useLocation()
  const [toggleMenu, settoggleMenu] = useState(false);
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // })
  
  const themeInvert = () => {
    const set = !toggleMenu;
    settoggleMenu(set)
  }
  
  return (
    <div className="App">
      <Header history={history} themeInvert={themeInvert} toggleMenu={toggleMenu} />
      <div>
        <Transition
            items={toggleMenu} 
            from={{marginLeft: -150 }} 
            enter={{marginLeft: 0 }} 
            leave={{marginLeft: -150 }}
          >
            {toggleMenu => toggleMenu && (props => <animated.div style={props}><Menu className="menu-position" history={history} settoggleMenu={settoggleMenu} toggleMenu={toggleMenu} themeInvert={themeInvert}/></animated.div>)}</Transition>
        <Transition 
          items={location} 
          from={{ opacity: 0, marginLeft: -100 }} 
          enter={{ opacity: 1, marginLeft: 0 }} 
          leave={{ opacity: 0, marginLeft: -100 }}
        >
          {location => location && (props => 
            <animated.div style={props}>
              <Switch location={location}>
                <Route exact path='/' render={() => <About toggleMenu={toggleMenu} />} />
                <Route path='/skills' render={() => <Skills toggleMenu={toggleMenu} />} />
                <Route path='/projects' render={() => <Projects toggleMenu={toggleMenu} />} />
              </Switch>
            </animated.div>
          )}
        </Transition>
        {/* <Transition 
            items={toggleMenu} 
            from={{ opacity: 0 }} 
            enter={{ opacity: 1 }} 
            update={{ opacity: 1 }} 
            leave={{ opacity: 0 }}
          >
            {toggleMenu => toggleMenu && (props => 
              <div style={props}>
                <Switch location={location}>
                  <Route exact path='/' render={() => <About toggleMenu={toggleMenu} />} />
                  <Route path='/skills' render={() => <Skills toggleMenu={toggleMenu} />} />
                  <Route path='/projects' render={() => <Projects toggleMenu={toggleMenu} themeInvert={themeInvert}/>} />
                </Switch>
              </div>
            )}
          </Transition> */}

      </div>
      <Footer toggleMenu={toggleMenu} history={history}/>
    </div>
  );
}

export default App;

// <Transition 
//   items={toggleMenu} 
//   from={{ opacity: 0 }} 
//   enter={{ opacity: 1 }} 
//   leave={{ opacity: 0 }}
// >
//   {toggleMenu => toggleMenu && (props => 
//     <div style={props}>
//       <Switch location={location}>
//         <Route exact path='/' render={() => <About toggleMenu={toggleMenu} />} />
//         <Route path='/skills' render={() => <Skills toggleMenu={toggleMenu} />} />
//         <Route path='/projects' render={() => <Projects toggleMenu={toggleMenu} themeInvert={themeInvert}/>} />
//       </Switch>
//     </div>
//   )}
// </Transition>


// {transitions.map(({item: location, props, key })=>(
//   <animated.div key={key} style={props}>
//     <Switch location={location}>
//       <Route exact path='/' render={() => <About toggleMenu={toggleMenu} />} />
//       <Route path='/skills' render={() => <Skills toggleMenu={toggleMenu} />} />
//       <Route path='/projects' render={() => <Projects toggleMenu={toggleMenu} themeInvert={themeInvert}/>} />
//     </Switch>
//   </animated.div>
// ))}

// const theme = [
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${leaf})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${leaf_invert})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${beach})`, h1:{color: 'hsla(206, 19%, 59%, .19)'}},
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${beach_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}},
//   {color: 'hsl(235, 9%, 47%)',  background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
//   {color: 'hsl(351, 28%, 52%)',  background: `url(${berry_invert})`, h1:{color: 'hsla(351, 28%, 52%, .19)'}}
// ]