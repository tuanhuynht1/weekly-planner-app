import React, {useState} from 'react';
import axios from 'axios';

const QuickAdd = ({addToList, getTodos, date_string}) => {

	const [input,setInput] = useState('');

	const updateInput = e => {
		setInput(e.target.value);
	}
	
	const submitTodo = e => {
		e.preventDefault();		// prevent refreshing the page
		if (input.trim() !== ''){	// prevents sending an empty todo
			setInput('');	// clear input field
			addToList({description: input, assigned_date: date_string});	// add temp todo while waiting for query to go through
			axios
			.post(`/todos/${date_string}`, {
				description: input
			})
			.then(res => {
				console.log(res.data);
				getTodos();	// update list
			})
			.catch(console.error);
		}
	}

	return (
		<form onSubmit={submitTodo}>
			<input type='text' className='quickadd-input' value={input} onChange={updateInput} placeholder='Enter new Todo!'/>
			<button type='submit'>Quick Add</button>
		</form>
	);
};

export default QuickAdd;
