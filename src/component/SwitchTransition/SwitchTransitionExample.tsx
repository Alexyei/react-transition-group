import {FC, useEffect, useState} from "react";
import {CSSTransition, SwitchTransition, Transition} from 'react-transition-group';

import classes from "./SwitchTransitionExample.module.scss"

const SwitchTransitionExampleCSSTransitionClasses: FC = () => {
    // const [loaderVisible, setLoaderVisible] = useState(false);
    // return (<div>
    //     <button onClick={()=>setLoaderVisible(prev=>!prev)}>{loaderVisible ? "hide":"show"}</button>
    //     <Loader loaderVisible={loaderVisible}/>
    // </div>)

    const [mode, setMode] = useState<"out-in" | "in-out">("out-in");
    const [toggle, setToggle] = useState(false);

    function onEnterHandler(node: any, isAppearing: boolean) {
        console.log("enter, " + isAppearing.toString())
    }

    function onEnteringHandler(node: any, isAppearing: boolean) {
        console.log("entering, " + isAppearing.toString())
    }

    function onEnteredHandler(node: any, isAppearing: boolean) {
        console.log("ENTERED, " + isAppearing.toString())
    }

    function onExitHandler() {
        console.log("exit")
    }

    function onExitingHandler() {
        console.log("exiting")
    }

    function onExitedHandler() {
        console.log("EXITED")
    }

    useEffect(() => {
        console.log("UPDATED")
        return () => console.log("UNMOUNT")
    })

    console.log("RENDER")
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div>Mode:
                <label htmlFor={"out-in"}>out-in</label>
                <input checked={mode === "out-in"} onChange={(e) => setMode(e.target.value as any)} id={"out-in"}
                       type={"radio"} name={"radio"} value={"out-in"}/>
                <label htmlFor={"in-out"}>in-out</label>
                <input checked={mode === "in-out"} onChange={(e) => setMode(e.target.value as any)} id={"in-out"}
                       type={"radio"} name={"radio"} value={"in-out"}/>
            </div>
            <SwitchTransition mode={mode}>
                <CSSTransition onExited={onExitedHandler} onExiting={onExitingHandler} onExit={onExitHandler}
                               onEntered={onEnteredHandler} onEntering={onEnteringHandler} onEnter={onEnterHandler}
                               key={toggle.toString()} timeout={500} classNames={{
                    enterActive: classes.entering,
                    enter: classes.enter,
                    enterDone: classes.entered,
                    exitDone: classes.exited,
                    exitActive: classes.exiting,
                    exit: classes.exit
                }}>
                    <button onClick={() => setToggle(prev => !prev)}>
                        {toggle ? "HELLO" : "GOODBYE"}
                    </button>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default SwitchTransitionExampleCSSTransitionClasses;

export const SwitchTransitionExampleCSSTransitionWrong: FC = () => {
    // const [loaderVisible, setLoaderVisible] = useState(false);
    // return (<div>
    //     <button onClick={()=>setLoaderVisible(prev=>!prev)}>{loaderVisible ? "hide":"show"}</button>
    //     <Loader loaderVisible={loaderVisible}/>
    // </div>)

    const [mode, setMode] = useState<"out-in" | "in-out">("out-in");
    const [toggle, setToggle] = useState(false);

    function onEnterHandler(node: any, isAppearing: boolean) {
        console.log("enter, " + isAppearing.toString())
    }

    function onEnteringHandler(node: any, isAppearing: boolean) {
        console.log("entering, " + isAppearing.toString())
    }

    function onEnteredHandler(node: any, isAppearing: boolean) {
        console.log("ENTERED, " + isAppearing.toString())
    }

    function onExitHandler() {
        console.log("exit")
    }

    function onExitingHandler() {
        console.log("exiting")
    }

    function onExitedHandler() {
        console.log("EXITED")
    }

    useEffect(() => {
        console.log("UPDATED")
        return () => console.log("UNMOUNT")
    })

    console.log("RENDER")
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{color:'red'}}>Wrong</div>
            <div>Mode:
                <label htmlFor={"out-in2"}>out-in</label>
                <input checked={mode === "out-in"} onChange={(e) => setMode(e.target.value as any)} id={"out-in2"}
                       type={"radio"} name={"radio2"} value={"out-in"}/>
                <label htmlFor={"in-out2"}>in-out</label>
                <input checked={mode === "in-out"} onChange={(e) => setMode(e.target.value as any)} id={"in-out2"}
                       type={"radio"} name={"radio2"} value={"in-out"}/>
            </div>
            <SwitchTransition mode={mode}>
                <CSSTransition onExited={onExitedHandler} onExiting={onExitingHandler} onExit={onExitHandler}
                               onEntered={onEnteredHandler} onEntering={onEnteringHandler} onEnter={onEnterHandler}
                               key={toggle.toString()} timeout={500}
                               classNames={{enterActive: classes.enter, exitActive: classes.exit}}>
                    <button onClick={() => setToggle(prev => !prev)}>
                        {toggle ? "HELLO" : "GOODBYE"}
                    </button>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export const SwitchTransitionExampleCSSTransitionStyles: FC = () => {
    const [mode, setMode] = useState<"out-in" | "in-out">("out-in");
    const [toggle, setToggle] = useState(false);

    function onEnterHandler(node: any, isAppearing: boolean) {
        console.log("enter, " + isAppearing.toString())
    }

    function onEnteringHandler(node: any, isAppearing: boolean) {
        console.log("entering, " + isAppearing.toString())
    }

    function onEnteredHandler(node: any, isAppearing: boolean) {
        console.log("ENTERED, " + isAppearing.toString())
    }

    function onExitHandler() {
        console.log("exit")
    }

    function onExitingHandler() {
        console.log("exiting")
    }

    function onExitedHandler() {
        console.log("EXITED")
    }

    useEffect(() => {
        console.log("UPDATED")
        return () => console.log("UNMOUNT")
    })

    console.log("RENDER")
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div>Mode:
                <label htmlFor={"out-in3"}>out-in</label>
                <input checked={mode === "out-in"} onChange={(e) => setMode(e.target.value as any)} id={"out-in3"}
                       type={"radio"} name={"radio3"} value={"out-in"}/>
                <label htmlFor={"in-out3"}>in-out</label>
                <input checked={mode === "in-out"} onChange={(e) => setMode(e.target.value as any)} id={"in-out3"}
                       type={"radio"} name={"radio3"} value={"in-out"}/>
            </div>
            <SwitchTransition mode={mode}>
                <CSSTransition onExited={onExitedHandler} onExiting={onExitingHandler} onExit={onExitHandler}
                               onEntered={onEnteredHandler} onEntering={onEnteringHandler} onEnter={onEnterHandler}
                               key={toggle.toString()} timeout={500} classNames={{
                    enter: classes.enter__styles,
                    enterActive: classes.entering__styles,
                    exit: classes.exit__styles,
                    exitActive: classes.exiting__styles
                }}>
                    <button onClick={() => setToggle(prev => !prev)}>
                        {toggle ? "HELLO" : "GOODBYE"}
                    </button>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export const SwitchTransitionExampleTransition: FC = () => {
    // const [loaderVisible, setLoaderVisible] = useState(false);
    // return (<div>
    //     <button onClick={()=>setLoaderVisible(prev=>!prev)}>{loaderVisible ? "hide":"show"}</button>
    //     <Loader loaderVisible={loaderVisible}/>
    // </div>)

    const [mode, setMode] = useState<"out-in" | "in-out">("out-in");
    const [toggle, setToggle] = useState(false);

    function onEnterHandler(node: any, isAppearing: boolean) {
        console.log("enter, " + isAppearing.toString())
    }

    function onEnteringHandler(node: any, isAppearing: boolean) {
        console.log("entering, " + isAppearing.toString())
    }

    function onEnteredHandler(node: any, isAppearing: boolean) {
        console.log("ENTERED, " + isAppearing.toString())
    }

    function onExitHandler() {
        console.log("exit")
    }

    function onExitingHandler() {
        console.log("exiting")
    }

    function onExitedHandler() {
        console.log("EXITED")
    }

    useEffect(() => {
        console.log("UPDATED")
        return () => console.log("UNMOUNT")
    })

    console.log("RENDER")


    const transitionStyles = {
        // enter: {}, not exist
        entering: {opacity: 0, transform: 'translateX(-150%)'},
        entered: {
            opacity: 1,
            transform: 'translateX(0)',
            transition: 'opacity 500ms, transform 500ms'
        },

        // exit: {}, not exist
        exiting: {
            opacity: 0,
            transform: 'translateX(150px)',
            transition: 'opacity 500ms, transform 500ms'
        },
        exited: {
            opacity: 1,
            transform: 'translateX(0)'
        },
        unmounted: {},
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div>Transition</div>
            <div>Mode:
                <label htmlFor={"out-in4"}>out-in</label>
                <input checked={mode === "out-in"} onChange={(e) => setMode(e.target.value as any)} id={"out-in4"}
                       type={"radio"} name={"radio4"} value={"out-in"}/>
                <label htmlFor={"in-out4"}>in-out</label>
                <input checked={mode === "in-out"} onChange={(e) => setMode(e.target.value as any)} id={"in-out4"}
                       type={"radio"} name={"radio4"} value={"in-out"}/>
            </div>
            <SwitchTransition mode={mode}>
                <Transition onExited={onExitedHandler} onExiting={onExitingHandler} onExit={onExitHandler}
                            onEntered={onEnteredHandler} onEntering={onEnteringHandler} onEnter={onEnterHandler}
                            key={toggle.toString()} timeout={500}>
                    {state => <button style={{...transitionStyles[state]}} onClick={() => setToggle(prev => !prev)}>
                        {toggle ? "HELLO" : "GOODBYE"}
                    </button>}
                </Transition>
            </SwitchTransition>
        </div>
    )
}

export const SwitchTransitionExampleCSSTransitionStylesAddEndListener: FC = () => {
    const [mode, setMode] = useState<"out-in" | "in-out">("out-in");
    const [toggle, setToggle] = useState(false);

    function onEnterHandler(node: any, isAppearing: boolean) {
        console.log("enter, " + isAppearing.toString())
    }

    function onEnteringHandler(node: any, isAppearing: boolean) {
        console.log("entering, " + isAppearing.toString())
    }

    function onEnteredHandler(node: any, isAppearing: boolean) {
        console.log("ENTERED, " + isAppearing.toString())
    }

    function onExitHandler() {
        console.log("exit")
    }

    function onExitingHandler() {
        console.log("exiting")
    }

    function onExitedHandler() {
        console.log("EXITED")
    }

    useEffect(() => {
        console.log("UPDATED")
        return () => console.log("UNMOUNT")
    })

    console.log("RENDER")
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div>Mode:
                <label htmlFor={"out-in"}>out-in</label>
                <input checked={mode === "out-in"} onChange={(e) => setMode(e.target.value as any)} id={"out-in5"}
                       type={"radio"} name={"radio5"} value={"out-in"}/>
                <label htmlFor={"in-out"}>in-out</label>
                <input checked={mode === "in-out"} onChange={(e) => setMode(e.target.value as any)} id={"in-out5"}
                       type={"radio"} name={"radio5"} value={"in-out"}/>
            </div>
            <SwitchTransition mode={mode}>
                <CSSTransition onExited={onExitedHandler} onExiting={onExitingHandler} onExit={onExitHandler}
                               onEntered={onEnteredHandler} onEntering={onEnteringHandler} onEnter={onEnterHandler}
                               key={toggle.toString()} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames={{
                    enter: classes.enter__styles,
                    enterActive: classes.entering__styles,
                    exit: classes.exit__styles,
                    exitActive: classes.exiting__styles
                }}>
                    <button onClick={() => setToggle(prev => !prev)}>
                        {toggle ? "HELLO" : "GOODBYE"}
                    </button>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}