
import { useReducer } from "react";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

// const initialState: Todo[] = [
//     { id: 1, text: "Mata katten", completed: false },
//     { id: 2, text: "Mata hunden", completed: false }
// ]

const initialState: Todo[] = []
  
type TodoAction = 
{ type: 'add', payload: { text: string } } | 
{ type: 'toggle', payload: { id: number } } |
{ type: 'update', payload: { id: number, text: string } } | 
{ type: 'delete', payload: { id: number } }



// Reducerfunktion för att samla logiken. Föregående state samt action-type => Nuvarande state
function reducer(state: Todo[], action: TodoAction) {

    switch(action.type) {
        case 'add': 
        return [...state, {id: state.length + 1, text: action.payload.text, completed: false}]
        case 'toggle': return state.map((todo: Todo) => todo.id === action.payload.id ? {...todo, completed: !todo.completed }: todo) 
        case 'update': return state
        case 'delete': return state.filter((todo: Todo) => todo.id !== action.payload.id)
    }
}

function TodoApp() {



    const [state, dispatch] = useReducer(reducer, initialState)

    const handleAddTodo = (text: string) => {
        dispatch({ type: 'add', payload: {text}})
    }

    const handleToggle = (id: number) => {
        dispatch({ type: 'toggle', payload: {id}})
    }

    const handleDelete = (id: number) => {
        dispatch({ type: 'delete', payload: {id}})
    }

    console.log(state);

    return(
        <>
        <h1>Todo App</h1>

        <input/>
        <div className="flex flex-col gap-4">
            <button className="border-2 border-black pz-y2 px-2 rounded" onClick={() => handleAddTodo('nåt nytt att göra')}>Lägg till nåt</button> 
            <button className="border-2 border-black pz-y2 px-2 rounded" onClick={() => handleToggle(1)}>Toggla id 1</button> 
            <button className="border-2 border-black pz-y2 px-2 rounded" onClick={() => handleDelete(2)}>Ta bort id 2</button> 
        </div>

        {/* Rendera lista utifrån nuvarande*/}

        </>
    )

}

export default TodoApp;