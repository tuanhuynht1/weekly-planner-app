import React from 'react';

const Footer = ({list}) => {

	let completed = 0;
	for(let i = 0; i < list.length; i++){
		if(list[i].completed === true){
			completed++;
		}
	}

	return (
		<div className='footer'>
			<button>Overdues</button>
			<h3>{completed}/{list.length}</h3>
		</div>
	);
};

export default Footer;