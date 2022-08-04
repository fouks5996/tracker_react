import React, { useState, useEffect } from "react";

function SortRead(props) {
	const { setBooks, reload } = props;
	const [click, setClick] = useState(false);

	function globalFilter() {
		if (!click) {
			setBooks((books) => books.filter((element) => element.read));
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
			onClick={globalFilter}>
			Filtrer par lecture
		</button>
	);
}

export default SortRead;
