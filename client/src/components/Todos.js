import React, {useState} from 'react';
import axios from 'axios';

const Todos = () => {

	const [list, setList] = useState([]);

	axios
	.get('/todos')
	.then(res => {
		setList(res.data);
	})
	.catch(console.error);

	return (
		<div>
			<h2>Todos</h2>
			<ul>
				{list.map( todo => 
					<li key={todo.tid}>{todo.description}</li>
				)}
			</ul>
			
		</div>
	);
};

export default Todos;
