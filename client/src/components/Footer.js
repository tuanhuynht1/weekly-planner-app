import React from 'react';

const Footer = ({total, count}) => {

	let ratio = 0;

	if (total !== 0){
		ratio = count / total;
	}

	const progressBarStyle = ratio === 1 ? 
		{width:'100%',backgroundColor:'limegreen'} : {width : `calc(${ratio} * 100%)`};
	

	return (
		<div className='footer'>
			<div className='progress-bar-container'>
				<span className='progress-bar' style={progressBarStyle}></span>
			</div>
			<span>{count}/{total}</span>
		</div>
	);
};

export default Footer;