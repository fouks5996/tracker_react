import React from "react";

function Heart() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			fill='none'
			viewBox='0 0 22 22'
			stroke='currentColor'
			strokeWidth={2}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
			/>
		</svg>
	);
}

export default Heart;
