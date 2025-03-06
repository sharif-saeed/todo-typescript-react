import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let NewContext = createContext()

export function AppDataProvider({children}){
    let [todos, setTodos] = useState([
        {id:uuidv4(),name:"Eating breakfast", status:false},
        {id:uuidv4(),name:"Going to gym", status:true},
        {id:uuidv4(),name:"Whaching movie at 10", status:false},
    ])

    function addTodo(event){
        if(event.target.value == ""){

        }
        else{
            if(event.key=="Enter"){
                let newTodo = {id:uuidv4(), name: event.target.value, status:false}
                setTodos([...todos, newTodo])
                event.target.value = ''
            }
        }
    }

    function statusHandler(todoId){
        let updatedTodo = todos.map(
            (item)=>{
                if(item.id==todoId){
                    item.status = !item.status
                    return item
                }
                return item
            }
        )
        setTodos(updatedTodo)
    }

    function removeTodoHandler(todoId){
        let updatedTodos2 = todos.filter(
            (item)=>{
                return item.id != todoId
            }
        )
        setTodos(updatedTodos2)
    }

    function changeHandler(todoId, newName){
      let updatedTodos3 =  todos.map(
            (item)=>{
                if(item.id==todoId){
                    item.name = newName
                    return item
                }
                return item
            }
        )
        setTodos(updatedTodos3)
    }

    return(
        <NewContext.Provider value={{todos,addTodo,statusHandler,removeTodoHandler,changeHandler}}>
            {children}
        </NewContext.Provider>
    )
}