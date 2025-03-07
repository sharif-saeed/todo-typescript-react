import { createContext, ReactNode } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Todo{
    id: string
    name: string
    status: boolean
}


interface ContextType{
    todos: Todo[]
    addTodo: (event: React.KeyboardEvent) => void
    statusHandler: (todoId: string) => void
    removeTodoHandler: (todoId: string) => void
    changeHandler: (todoId: string, newName: string)=> void
}

export let NewContext = createContext({} as ContextType)



export function AppDataProvider({children}: {children: ReactNode}){
    let [todos, setTodos] = useState<Todo[]>([
        {id:uuidv4(),name:"Eating breakfast", status:false},
        {id:uuidv4(),name:"Going to gym", status:true},
        {id:uuidv4(),name:"Whaching movie at 10", status:false},
    ])

    function addTodo(event:React.KeyboardEvent){
        if((event.target as HTMLInputElement).value == ""){

        }
        else{
            if(event.key=="Enter"){
                let newTodo = {id:uuidv4(), name: (event.target as HTMLInputElement).value, status:false}
                setTodos([...todos, newTodo]);
                (event.target as HTMLInputElement).value = ''
            }
        }
    }

    function statusHandler(todoId:string){
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

    function removeTodoHandler(todoId:string){
        let updatedTodos2 = todos.filter(
            (item)=>{
                return item.id != todoId
            }
        )
        setTodos(updatedTodos2)
    }

    function changeHandler(todoId:string, newName:string){
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