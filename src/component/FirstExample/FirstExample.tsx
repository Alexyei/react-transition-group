import {FC, useState} from "react";
import classes from "./FirstExample.module.scss"
const FirstExample:FC = ()=>{
    const [loaderVisible, setLoaderVisible] = useState(false);
    return (<div>
        <button onClick={()=>setLoaderVisible(prev=>!prev)}>{loaderVisible ? "hide":"show"}</button>
        {loaderVisible && <div className={classes.circle}/>}
    </div>)
}

export default FirstExample;
