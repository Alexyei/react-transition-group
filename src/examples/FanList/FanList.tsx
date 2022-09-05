import {FC, ReactNode, useState} from "react";
import classes from './FanList.module.scss';
import {CSSTransition, Transition} from "react-transition-group";

const classesArray = [
    {x: 16, rotate: 12},
    {x: 10, rotate: 10},
    {x: 6, rotate: 8},
    {x: 4, rotate: 6},
    {x: 2, rotate: 4},
    {x: 1, rotate: 2},
]

const mockData = [
    {
        id: 1,
        subject: 'Basketball Camp',
        sender: 'Leanna Spencer',
        image: 'https://avatars.dicebear.com/api/bottts/1.svg?size=128',

    },
    {
        id: 2,
        subject: 'Guitar Lessons',
        sender: 'Odessa Bergnaum',
        image: 'https://avatars.dicebear.com/api/bottts/2.svg?size=128',

    },
    {
        id: 3,
        subject: 'Laravel Course',
        sender: 'Rosalee Wisoky',
        image: 'https://avatars.dicebear.com/api/bottts/3.svg?size=128',
    },
    {
        id: 4,
        subject: 'Latest News',
        sender: 'Chandler Borer',
        image: 'https://avatars.dicebear.com/api/bottts/4.svg?size=128',
    },
    {
        id: 5,
        subject: 'iMac 2020 Revealed',
        sender: 'Kaleb Bernhard',
        image: 'https://avatars.dicebear.com/api/bottts/5.svg?size=128',
    },
    {
        id: 6,
        subject: 'Vuact JS Framework',
        sender: 'William Christiansen',
        image: 'https://avatars.dicebear.com/api/bottts/6.svg?size=128',
    },
    {
        id: 7,
        subject: 'Крайний',
        sender: 'William Christiansen',
        image: 'https://avatars.dicebear.com/api/bottts/7.svg?size=128',
    },
]

const Card: FC<{ mailData: typeof mockData[number], isFirst:boolean, onClick:()=>void }> = ({mailData,isFirst=false, onClick}) => {
    const className = [classes.card,isFirst?classes.first:""].join(" ")
    return (<button onClick={onClick} className={className}>
        <img src={mailData.image} alt={'avatar'}/>
        <div className={classes.text__container}>
            <div className={classes.subject}>{mailData.subject}</div>
            <div className={classes.sender}>{mailData.sender}</div>
        </div>
    </button>)
}

const ListItem: FC<{ children: ReactNode, styles: typeof classesArray[number], id:number, isVisible:boolean }> = ({children, styles,id,isVisible}) => {
    return (
        //style={{transform: `translateX(${0}px) rotate(${styles.rotate}deg)`}}
        <CSSTransition in={isVisible} mountOnEnter={true} unmountOnExit={true}  timeout={15000} classNames={{
            enterActive: classes.entering,
            enter: classes.enter,
            enterDone: classes.entered,
            exitDone: classes.exited,
            exitActive: classes.exiting,
            exit: classes.exit
        }}
        onEnter={()=>console.log("ENTER")}
        onEntering={()=>console.log("ENTERING")}
        onEntered={()=>console.log("ENTERED")}
                       onExit={()=>console.log("ENTER")}
                       onExiting={()=>console.log("ENTERING")}
                       onExited={()=>console.log("ENTERED")}

        >
        {/*style={{transform: `translateX(${styles.x/4}rem) rotate(${styles.rotate}deg)`}}*/}
        <li style={{transform: `translateX(${styles.x/4}rem) rotate(${styles.rotate}deg)`}}>
            {children}
        </li></CSSTransition>)

}


const ListItemTransition: FC<{ children: ReactNode, styles: typeof classesArray[number], id:number, isVisible:boolean }> = ({children, styles,id,isVisible}) => {
    // const transitionStyles = {
    //     // enter: {}, not exist
    //     entering: {
    //         opacity: 0,
    //         transform: 'translate(0px, 100px) rotate(0deg)',
    //         // transition: 'opacity 500ms, transform 500ms'
    //     },
    //
    //     entered: {
    //         opacity: 1,
    //         transform: `translateX(${styles.x/4}rem) rotate(${styles.rotate}deg)`,
    //         transition: 'all 5s ease-in'
    //     },
    //
    //     // exit: {}, not exist
    //     exiting: {
    //         // opacity: 0,
    //         // transform: 'translateX(150px)',
    //         // transition: 'opacity 500ms, transform 500ms'
    //     },
    //     exited: {
    //         // opacity: 1,
    //         // transform: 'translateX(0)'
    //     },
    //     unmounted: {},
    // };

    // const enterStyles = {
    //     opacity: 0,
    //     transform: 'translate(0px, 100px) rotate(0deg)',
    // }
    const transitionStyles = {
        // enter: {}, not exist
        entering: {
            // opacity: 0,
            // transform: 'translate(0px, 100px) rotate(0deg)',
            opacity: 1,
            transform: `translateX(${styles.x/4}rem) rotate(${styles.rotate}deg)`,
            transition: 'all .150s ease-in'
            // transition: 'opacity 500ms, transform 500ms'
        },

        entered: {
            opacity: 1,
            transform: `translateX(${styles.x/4}rem) rotate(${styles.rotate}deg)`,
            transition: 'all .150s ease-in'
        },

        // exit: {}, not exist
        exiting: {
            // opacity: 0,
            // transform: 'translateX(150px)',
            // transition: 'opacity 500ms, transform 500ms'
            opacity: 0,
            transform: 'translate(0px, 100px) rotate(0deg)',
            transition: 'all .150s ease-in'
        },
        exited: {
            // opacity: 1,
            // transform: 'translateX(0)'
            opacity: 0,
            transform: 'translate(0px, 100px) rotate(0deg)',
        },
        unmounted: {},
    };

    //style={{transform: `translateX(${styles.x/4}rem) rotate(${styles.rotate}deg)`}}
    return (
        //style={{transform: `translateX(${0}px) rotate(${styles.rotate}deg)`}}
        <Transition in={isVisible} mountOnEnter={true} unmountOnExit={true}  timeout={150}
                       onEnter={()=>console.log("ENTER")}
                       onEntering={()=>console.log("ENTERING")}
                       onEntered={()=>console.log("ENTERED")}
                       onExit={()=>console.log("ENTER")}
                       onExiting={()=>console.log("ENTERING")}
                       onExited={()=>console.log("ENTERED")}

        >{state=>{ console.log("state");console.log(state);console.log('--------');return(

            //style={{...enterStyle,...transitionStyles[state]}}
            <li style={{...transitionStyles[state]}} >
                {children}
            </li>)}}</Transition>)

}

const FanList: FC = () => {

    const lastElement = mockData.slice(-1)[0]
    const anotherElements = mockData.slice(0, -1)

    const [visible, setVisible] = useState(false)
    return (
        <div className={classes.container}>
            <div className={classes.footer}>
                {
                    // visible &&
                <ul className={classes.list}>
                    {/*<TransitionGroup component={ul}>*/}
                    {anotherElements.map((el,index)=>{
                        return <ListItemTransition isVisible={visible} id={el.id} key={el.id} styles={classesArray[index]}><Card onClick={ ()=>""}  isFirst={false} mailData={el}/></ListItemTransition>
                    })}
                    {/*</TransitionGroup>*/}
                </ul>}
                <Card onClick={()=>setVisible(prev=>!prev)} isFirst={true} mailData={lastElement}/>
            </div>
        </div>
    )
}

export default FanList;