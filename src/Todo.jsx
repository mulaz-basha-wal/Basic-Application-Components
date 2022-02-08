// This is a component designed to display multiple TODO list
// TODO List App:
//   - Inputs from <input> tag
//   - using useState() to store Array of todo items
//   - Add <button>: to add todo item into Array
//   - ClearAll <button>: to remove all item in todo

import { useState } from 'react';

function Todos() {
    let [todos, setTODOS]=useState([]);

    function onAdd(event){
        event.preventDefault();
        setTODOS([...todos, event.target.todoItem.value]);
    }

    function clearAll(){
        setTODOS([]);
    }

    return(
        <div className='TODO'>
            <h1 className='todoHead'>Todo List</h1>
            <form onSubmit={onAdd}>
                <input type="text" name='todoItem' placeholder='Enter Todo Item'/>
                <div className='todoButtons'>
                    <input type="button" name='clearAll' value="Clear All" onClick={clearAll}/>
                    <input type="submit" name='addItem' value="Add Item"/>
                </div>
            </form>
            <div className='TODOList'>
                <ul>{
                    todos.map(function(val, index){
                        return <li className='listItem'>{val}</li>
                    })
                }</ul>
            </div>
        </div>
    );
}
export default Todos;