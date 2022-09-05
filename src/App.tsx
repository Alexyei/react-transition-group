import React from 'react';
import SwitchTransitionExampleCSSTransitionClasses, {
    SwitchTransitionExampleCSSTransitionStyles,
    SwitchTransitionExampleCSSTransitionStylesAddEndListener,
    SwitchTransitionExampleCSSTransitionWrong,
    SwitchTransitionExampleTransition
} from "./component/SwitchTransition/SwitchTransitionExample";
import LoaderExample from "./component/FirstExample/LoaderExample";
import CSSTransitionLoaderExample from "./component/CSSTransitionExample/CSSTransitionLoaderExample";
import TransitionGroupExample from "./component/TransitionGroup/TransitionGroupExample";
import {AppRouter, Links} from "./router/AppRouter";



function App() {
  return (
    <div className="App">
      {/*  <LoaderExample/>*/}
      {/*  <CSSTransitionLoaderExample/>*/}
      {/*<SwitchTransitionExampleCSSTransitionClasses/>*/}
      {/*  <SwitchTransitionExampleCSSTransitionStyles/>*/}
      {/*  <SwitchTransitionExampleCSSTransitionWrong/>*/}
      {/*  <SwitchTransitionExampleTransition/>*/}
      {/*  <SwitchTransitionExampleCSSTransitionStylesAddEndListener/>*/}
      {/*  <TransitionGroupExample/>*/}
        <Links/>
        <AppRouter/>
    </div>
  );
}

export default App;
