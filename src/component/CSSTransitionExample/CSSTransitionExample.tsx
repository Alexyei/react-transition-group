import {FC, useState} from "react";
import { CSSTransition } from 'react-transition-group';

import classes from "./CSSTransitionExample.module.scss"
const CSSTransitionExample:FC = ()=>{
    const [loaderVisible, setLoaderVisible] = useState(false);
    return (<div>
        <button onClick={()=>setLoaderVisible(prev=>!prev)}>{loaderVisible ? "hide":"show"}</button>
        <Loader loaderVisible={loaderVisible}/>
    </div>)
}

export default CSSTransitionExample;


const Loader:FC<{loaderVisible: boolean}> = ({loaderVisible})=>{
    return (
        <>
            <CSSTransition in={loaderVisible} timeout={1000} mountOnEnter={true} unmountOnExit={true} classNames={{enterActive: classes.entering, enterDone: classes.entered, exitActive: classes.exiting, exitDone: classes.exited}}>
                {state=>{
                    return (
                        <>
                            <div className={`${classes.circle} ${state}`}/>
                        </>)}
                }
            </CSSTransition>
            <CSSTransition in={loaderVisible} timeout={1000} mountOnEnter={true} unmountOnExit={true} classNames={{enterActive: classes.entering, enterDone: classes.entered, exitActive: classes.exiting, exitDone: classes.exited}}>
                {state=>{
                    return (
                        <>
                            <div className={`${classes.inner_circle} ${state}`}/>
                        </>)}
                }
            </CSSTransition>
        </>
    )
}
