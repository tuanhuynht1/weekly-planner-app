import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';


const Todos = ({list}) => {

	return (
		<div className='todo-container'>
			<h2>Todos</h2>
			<ul>
				{list.map( (todo,i) => <TodoItem todo={todo} key={i}/>)}
			</ul>
		</div>
	);
};

export default Todos;
