import React, { useState, useRef } from "react";
import Cards from "./Cards";

function SearchBar(props) {
	const [bookToSearch, setBookToSearch] = useState("");
	const inputRef = useRef(null);

	const { dataToFetch } = props;

	function handleClick(event) {
		event.preventDefault();
		setBookToSearch(inputRef.current.value);
	}

	return (
		<div>
			<form className='my-12 max-w-5xl w-2/3'>
				<div className='mt-1 flex mb-4  rounded-md '>
					<span className='inline-flex items-center px-3 rounded-l-md border   bg-gray-50 text-gray-500 text-sm'>
						Search
					</span>

					<input
						type='text'
						ref={inputRef}
						id='message'
						name='message'
						autoComplete='off'
						placeholder='Chercher un livre'
						className=' focus:ring-indigo-500  bg-slate-100 py-5 px-8 focus:border-indigo-500 block w-full  sm:text-sm'
					/>
					<input
						className='ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						onClick={handleClick}
						type='submit'
					/>
				</div>
			</form>
			<Cards data={dataToFetch} filter={bookToSearch} />
		</div>
	);
}

export default SearchBar;
