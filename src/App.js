import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { useTransition, useSpring, animated } from "react-spring";
import { Spring, Transition } from "react-spring/renderprops";
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css';


function App(props) {
  const { location, history } = props
  let curLocation = location.pathname
  const [toggleMenu, settoggleMenu] = useState(false);
  const [load, setLoad] = useState(false);
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // })


  useEffect(() => {
    setLoad(true)
    return () => {
      setLoad(false)
    };
  }, [])

  // const fade = useSpring({
  //   opacity: toggleMenu ? 1 : 0,
  //   marginLeft: toggleMenu ? 0 : -100
  // });
  
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
            from={{marginLeft: -100 }} 
            enter={{marginLeft: 0 }} 
            leave={{marginLeft: -100 }}
          >
            {toggleMenu => toggleMenu && (props => <animated.div style={props}><Menu className="menu-position" history={history} settoggleMenu={settoggleMenu} toggleMenu={toggleMenu} themeInvert={themeInvert}/></animated.div>)}</Transition>
        {/* {toggleMenu ? <animated.div style={fade}><Menu className="menu-position" history={history} settoggleMenu={settoggleMenu} toggleMenu={toggleMenu} themeInvert={themeInvert}/></animated.div> : null} */}
        <Transition 
          items={curLocation} 
          from={{ opacity: 0, marginLeft: -100 }} 
          enter={{ opacity: 1, marginLeft: 0 }} 
          leave={{ opacity: 0, marginLeft: -100 }}
        >
          {curLocation => curLocation && (props => 
            <animated.div style={props}>
              <Switch location={location}>
                <Route exact path='/' render={() => <About toggleMenu={toggleMenu} />} />
                <Route path='/skills' render={() => <Skills toggleMenu={toggleMenu} />} />
                <Route path='/projects' render={() => <Projects toggleMenu={toggleMenu} themeInvert={themeInvert}/>} />
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

// export default withRouter(App);
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