import React, { useEffect, useState } from "react";

function SortFav(props) {
	const { setBooks, reload } = props;
	const [click, setClick] = useState(false);

	function showFilter() {
		if (!click) {
			setBooks((books) => books.filter((element) => element.isFav));
			setClick(true);
		} else if (click) {
			setClick(false);
		}
	}

	useEffect(() => {
		if (reload) {
			return setClick((click) => !click);
		} else if (!reload) {
			return setClick((click) => !click);
		}
	}, [reload]);

	return (
		<button
			className={`inline-flex ${" bg-green-700 focus:ring-green-500"}  focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white`}
			onClick={showFilter}>
			Filtrer par favoris
		</button>
	);
}

export default SortFav;
