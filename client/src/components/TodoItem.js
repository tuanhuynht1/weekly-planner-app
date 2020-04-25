import React, {useState} from 'react';
import axios from 'axios';

const TodoItem = ({todo}) => {

    const [completed,setCompleted] = useState(todo.completed);

    const toggle = () => {
        setCompleted(prev => !prev)
        axios
        .put(`/todos/toggle-status/${todo.tid}`)
        .then(res => console.log(res.data))
		.catch(console.error);
	}

	return (
        completed ?
            <li className='todo-item completed'>
                {todo.description}
                <input type='checkbox' onClick={toggle} defaultChecked={todo.completed}/>
            </li>
        :
            <li className='todo-item'>
                {todo.description}
                <input type='checkbox' onClick={toggle}/>
            </li>
	);
};

export default TodoItem;