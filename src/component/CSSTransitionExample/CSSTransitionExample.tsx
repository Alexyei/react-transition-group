import {FC, useEffect, useState} from "react";
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

    function onEnterHandler(node:any, isAppearing:boolean){
        console.log("enter, "+isAppearing.toString())
    }

    function onEnteringHandler(node:any, isAppearing:boolean){
        console.log("entering, "+isAppearing.toString())
    }

    function onEnteredHandler(node:any, isAppearing:boolean){
        console.log("ENTERED, "+isAppearing.toString())
    }

    function onExitHandler(){
        console.log("exit")
    }

    function onExitingHandler(){
        console.log("exiting")
    }

    function onExitedHandler(){
        console.log("EXITED")
    }

    useEffect(()=>{
        console.log("UPDATED")
        return ()=>console.log("UNMOUNT")
    })

    console.log("RENDER")
    return (
        <>
            <CSSTransition onEnter={onEnterHandler} onEntering={onEnteringHandler} onEntered={onEnteredHandler} onExit={onExitHandler} onExiting={onExitingHandler} onExited={onExitedHandler} in={loaderVisible} timeout={1000} mountOnEnter={true} unmountOnExit={true} classNames={{enterActive: classes.entering, enterDone: classes.entered, exitActive: classes.exiting, exitDone: classes.exited}}>
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
