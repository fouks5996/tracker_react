import React, { useState, useEffect } from "react";
import Heart from "../icons/Heart";
import HeartSolid from "../icons/HeartSolid";
import Button from "./Buttons/ButtonFav";
import ButtonRead from "./Buttons/ButtonRead";
import SortFav from "./Sorting/SortFav";
import SortRead from "./Sorting/SortRead";

function Cards(props) {
	const { data, filter } = props;
	const [books, setBooks] = useState([]);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		let filterUpper = filter.charAt(0).toUpperCase() + filter.slice(1);
		setBooks(data.filter((element) => element.title.match(filterUpper)));
	}, [setBooks, data, filter]);

	const stopFilter = () => {
		setBooks(data);
		setReload((reload) => !reload);
	};

	return (
		<div className='bg-white'>
			<div className='max-w-2xl mx-auto   sm:px-6 lg:max-w-7xl lg:px-8'>
				<div className='flex gap-3 mb-14'>
					<SortFav setBooks={setBooks} reload={reload} />
					<SortRead setBooks={setBooks} reload={reload} />
					<button
						className='ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
						onClick={stopFilter}>
						{" "}
						Stop Filter
					</button>
				</div>
				<div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{books.map((item) => (
						<a
							key={item.id}
							href={item.href}
							className='group flex flex-col items-stretch justify-between'>
							<div>
								<div
									key={item.id}
									className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
									<img
										src={item.thumbnailUrl && item.thumbnailUrl}
										alt={item.title}
										className='w-full h-full object-center object-cover group-hover:opacity-75'
									/>
								</div>
								<h3 className='mt-4 text-sm text-gray-700'>{item.title}</h3>
							</div>
							<p className='mt-1 text-lg font-medium text-gray-900'>
								{item.shortDescription
									? item.shortDescription.slice(0, 60).concat("...")
									: "Lorem ipsum dolor sit oaliqua. Ut enim ad minim veniam..."}
							</p>

							<div className='flex items-center justify-start gap-4 mt-3  bg-gray-50 text-right '>
								<Button
									data={item}
									label={<Heart />}
									labelClicked={<HeartSolid />}
								/>
								<ButtonRead data={item} label='Lire' labelClicked='Lu !' />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default Cards;
