import {FC, useEffect, useRef, useState} from "react";
import { CSSTransition } from 'react-transition-group';

import classes from "./CSSTransitionLoaderExample.module.scss"
const CSSTransitionLoaderExample:FC = ()=>{
    const [loaderVisible, setLoaderVisible] = useState(false);
    return (<div>
        <button onClick={()=>setLoaderVisible(prev=>!prev)}>{loaderVisible ? "hide":"show"}</button>
        <Loader loaderVisible={loaderVisible}/>
    </div>)
}

export default CSSTransitionLoaderExample;


const Loader:FC<{loaderVisible: boolean}> = ({loaderVisible})=>{

    const firstRender = useRef(true)
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
        if (firstRender.current)
        {
            console.log("MOUNT")
            firstRender.current = false;
        }else{
            console.log("UPDATED")
        }

        return ()=>{console.log("UNMOUNT");firstRender.current = true}
    })

    console.log("RENDER")
    return (
        <>
            <CSSTransition mountOnEnter={true} unmountOnExit={true} onEnter={onEnterHandler} onEntering={onEnteringHandler} onEntered={onEnteredHandler} onExit={onExitHandler} onExiting={onExitingHandler} onExited={onExitedHandler} in={loaderVisible} timeout={1000}  classNames={{enterActive: classes.entering, enterDone: classes.entered, exitActive: classes.exiting, exitDone: classes.exited}}>
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
