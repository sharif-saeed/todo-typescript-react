import { useContext, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { NewContext } from "./NewContext";

export default function MainTodo(){

    let {addTodo} = useContext(NewContext)

    return(
        <div className="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-blue-600"> To-Do Project | Saeed Sharifi Academy</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?" onKeyDown={addTodo}
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <TodoList />
            </div>
        </div>
    </div>
    )
}