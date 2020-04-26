import React, {useState} from 'react';
import axios from 'axios';

const TodoItem = ({todo, updateProgress}) => {

    const [completed,setCompleted] = useState(todo.completed);

    const toggle = (e) => {
        if (e.target.checked){
            updateProgress(1);
        }
        else{
            updateProgress(-1);
        }
        setCompleted(prev => !prev)
        axios
        .put(`/todos/toggle-status/${todo.tid}`)
        // .then(res => console.log(res.data))
		.catch(console.error);
	}

	return (
        completed ?
            <li className='todo-item completed'>
                {todo.description}
                <input type='checkbox' onClick={e => toggle(e)} defaultChecked={todo.completed}/>
                <span className='todo-delete'>&times;</span>
            </li>
        :
            <li className='todo-item'>
                {todo.description}
                <input type='checkbox' onClick={e => toggle(e)}/>
                <span className='todo-delete'>&times;</span>
            </li>
	);
};

export default TodoItem;