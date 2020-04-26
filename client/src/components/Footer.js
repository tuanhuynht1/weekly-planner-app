import React from 'react';

const Footer = ({total, count}) => {
	return (
		<div className='footer'>
			{count}/{total}
		</div>
	);
};

export default Footer;