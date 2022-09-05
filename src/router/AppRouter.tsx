import {FC, useMemo} from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {publicRoutes} from "./routes";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import classes from './AppRouter.module.scss'

export const AppRouter:FC = ()=>{
    const location = useLocation();
    console.log("location", location);
    const memored = useMemo(()=>publicRoutes.map((el)=>
        //div className={classes.page}
        <Route key={el.path} path={el.path} element={<div >{el.element}</div>}/>
    ),[]);
    return (
        <div className={classes.container}>
        <TransitionGroup>
            <CSSTransition key={location.key} timeout={300}
                           classNames={{enter:classes.enter,enterActive:classes.enter__active,exit:classes.exit,exitActive:classes.exit__active}}
                           mountOnEnter={false} unmountOnExit={false}>
            <Routes>
                {memored}
        </Routes>
      </CSSTransition>
        </TransitionGroup>
 </div>
    )
}

export const Links:FC = ()=>{
    return (
        <div style={{position:"absolute",zIndex:1000}}>
            {publicRoutes.filter((el)=>el.linkName!=undefined).map((el)=><Link key={el.path} to={el.path}>{el.linkName}</Link>)}
        </div>
    )
}
