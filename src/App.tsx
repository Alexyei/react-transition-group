import React from 'react';
import CSSTransitionExample from "./component/CSSTransitionExample/CSSTransitionExample";
import FirstExample from "./component/FirstExample/FirstExample";
import SwitchTransitionExample, {
    SwitchTransitionExample2,
    SwitchTransitionExample3, SwitchTransitionExample4
} from "./component/SwitchTransition/SwitchTransitionExample";


function App() {
  return (
    <div className="App">
        {/*<FirstExample/>*/}
        {/*<CSSTransitionExample/>*/}
        {/*<SwitchTransitionExample/>*/}
        {/*<SwitchTransitionExample2/>*/}
        {/*<SwitchTransitionExample3/>*/}
        <SwitchTransitionExample4/>
    </div>
  );
}

export default App;
