import React from 'react';

const QuickAdd = () => {
	return (
		<form className='d-flex'>
			<input type='text' placeholder='Enter new Todo!' className='form-control' />
			<button className='btn btn-success ml-1'>Quick Add</button>
		</form>
	);
};

export default QuickAdd;
