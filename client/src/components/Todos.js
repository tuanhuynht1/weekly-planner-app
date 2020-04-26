import React from 'react';
import TodoItem from './TodoItem';


const Todos = ({list, updateProgress}) => {

	return (
		<div className='todo-container'>
			<h2>Todos</h2>
			<ul>
				{list.map( (todo,i) => <TodoItem todo={todo} updateProgress={updateProgress} key={i}/>)}
			</ul>
		</div>
	);
};

export default Todos;
