import {FC, useState} from "react";
import classes from './BubbleLoading.module.scss'
import {CSSTransition} from 'react-transition-group';

const Loader: FC<{ visible: boolean }> = ({visible}) => {
    return (
        <CSSTransition in={visible} mountOnEnter={true} unmountOnExit={true} timeout={1000} classNames={{
            enterActive: classes.entering,
            enterDone: classes.entered,
            exitActive: classes.exiting,
            exitDone: classes.exited
        }}>
            {state =>
                <div className={`${classes.wrapper} ${state}`}>
                    {
                        Array(10).fill(0).map((el, index) => (
                            <span key={index} style={{animationDelay: `calc(${index + 1} * 0.15s)`}}>
                <span style={{animationDelay: `calc(${index + 1} * 0.15s)`}} className={classes.bubble}></span>
            </span>
                        ))
                    }
                </div>}</CSSTransition>


    )
}

const BubbleLoading: FC = () => {
    const [loaderVisible, setLoaderVisible] = useState(false);
    return (<div className={classes.container}>
        <button onClick={() => setLoaderVisible(prev => !prev)}>{loaderVisible ? "hide" : "show"}</button>
        <Loader visible={loaderVisible}/>
    </div>)
}

export default BubbleLoading;