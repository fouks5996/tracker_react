/* eslint-disable quotes */
/* eslint-disable func-names */
/* eslint-disable wrap-iife */
/* eslint-disable no-alert */
/* eslint-disable no-tabs */
/* eslint-disable indent */
// eslint-disable-next-line quotes

import React from "react";
import useFetch from "../hooks/useFetch";
import SearchBar from "./SearchBar";

function Tracker() {
	const [loading, items] = useFetch(
		"https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json"
	);

	return (
		<div>
			{!loading && (
				<div className='flex flex-col items-center'>
					<h1 className='text-4xl mt-8 tracking-tight font-extrabold sm:text-5xl md:text-6xl block text-indigo-400 xl:inline'>
						{" "}
						Bienvenue{" "}
					</h1>
					<SearchBar dataToFetch={items.books[0]} />
				</div>
			)}
		</div>
	);
}

export default Tracker;
