import React from 'react';
import TodoItem from './TodoItem';


const Todos = ({list, updateProgress}) => {

	const themes = ['#ECCBD9','#DAFFEF','#C2DFE3','#B8D0EB','#B9FAF8'];

	return (
		<div className='todo-container'>
			<h2>Todos</h2>
			<ul>
			{list.map( (todo,i) => {
				const theme = themes[i % themes.length];
				return(
					<TodoItem todo={todo} updateProgress={updateProgress} theme={theme} key={i}/>
				)
			})}
			</ul>
		</div>
	);
};

export default Todos;
