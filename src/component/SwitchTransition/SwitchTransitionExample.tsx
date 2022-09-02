import {FC, useState} from "react";
import {CSSTransition, SwitchTransition, TransitionGroup} from 'react-transition-group';

import classes from "./SwitchTransitionExample.module.scss"

const SwitchTransitionExample:FC = ()=>{
    // const [loaderVisible, setLoaderVisible] = useState(false);
    // return (<div>
    //     <button onClick={()=>setLoaderVisible(prev=>!prev)}>{loaderVisible ? "hide":"show"}</button>
    //     <Loader loaderVisible={loaderVisible}/>
    // </div>)

    const [mode, setMode] = useState<"out-in"|"in-out">("out-in");
    const [toggle, setToggle] = useState(true);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center',justifyContent:'center'}}>
            <div>Mode:
            <label htmlFor={"out-in"}>out-in</label>
            <input checked={mode === "out-in"} onChange={(e)=>setMode(e.target.value as any)} id={"out-in"} type={"radio"} name={"radio"} value={"out-in"}/>
            <label htmlFor={"in-out"}>in-out</label>
            <input checked={mode === "in-out"}onChange={(e)=>setMode(e.target.value as any)}  id={"in-out"} type={"radio"} name={"radio"} value={"in-out"}/>
            </div>
            <SwitchTransition mode={mode}>
                <CSSTransition key={toggle.toString()} timeout={500} classNames={{enterActive: classes.entering, enter: classes.entered, exitActive: classes.exiting, exit: classes.exited}}>
            <button  onClick={()=>setToggle(prev=>!prev)}>
                {toggle ? "HELLO" : "GOODBYE"}
            </button>
                    </CSSTransition>
                </SwitchTransition>
        </div>
    )
}

export default SwitchTransitionExample;

//
// const Loader:FC<{loaderVisible: boolean}> = ({loaderVisible})=>{
//     return (
//         <SwitchTransition >
//             <CSSTransition key={loaderVisible.toString()}  timeout={1000} mountOnEnter={true} unmountOnExit={true}   classNames={{enterActive: classes.entering, enterDone: classes.entered, exitActive: classes.exiting, exitDone: classes.exited}}>
//                 {state=>{
//
//                     return loaderVisible ?
//                      (<>
//                             <div  className={`${classes.circle} ${state}`}/>
//                         </>)
//                         :null
//                 }
//                 }
//             </CSSTransition>
//             {/*<CSSTransition in={loaderVisible} timeout={1000} mountOnEnter={true} unmountOnExit={true} classNames={{enterActive: classes.entering, enterDone: classes.entered, exitActive: classes.exiting, exitDone: classes.exited}}>*/}
//             {/*    {state=>{*/}
//             {/*        return (*/}
//             {/*            <>*/}
//             {/*                <div className={`${classes.inner_circle} ${state}`}/>*/}
//             {/*            </>)}*/}
//             {/*    }*/}
//             {/*</CSSTransition>*/}
//         </SwitchTransition>
//     )
// }
