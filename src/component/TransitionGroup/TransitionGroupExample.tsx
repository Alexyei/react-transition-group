import {FC, useState} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import classes from "./TransitionGroupExample.module.scss"

const TransitionGroupExample:FC = ()=>{
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState<{id:number,value:string}[]>([])
    function handleAddTodo(){
        setTodos(prev=>[...prev,{id:Date.now(),value:input}])
        setInput('')
    }

    function removeTodo(index:number){
        setTodos(prev=>{
            return [...prev.slice(0,index),...prev.slice(index+1)]
        })
    }

    return (<>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleAddTodo}>Добавить</button>
        {/*<ul>*/}
            <TransitionGroup component={'ul'}>
            {todos.map((el,index)=>
                <CSSTransition key={el.id} timeout={500} classNames={{
                    enterActive: classes.entering,
                    enter: classes.enter,
                    enterDone: classes.entered,
                    exitDone: classes.exited,
                    exitActive: classes.exiting,
                    exit: classes.exit
                }}>
                <li key={el.id} onClick={()=>removeTodo(index)}>{el.value}</li>
                </CSSTransition>
                    ) }
            </TransitionGroup>
        {/*</ul>*/}
    </>)
}

export default TransitionGroupExample;