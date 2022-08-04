/* eslint-disable func-names */
/* eslint-disable wrap-iife */
/* eslint-disable no-alert */
/* eslint-disable no-tabs */
/* eslint-disable indent */
// eslint-disable-next-line quotes
import { useEffect, useState } from "react";

function useFetch(url) {
	const [state, setState] = useState({ items: [], loading: true });

	useEffect(() => {
		(async function () {
			const response = await fetch(url);
			const responseData = await response.json();
			if (response.ok) {
				setState({ items: responseData, loading: false });
			} else {
				alert(JSON.stringify(responseData));
				setState({ items: [], loading: false });
			}
		})();
	}, [url]);

	return [state.loading, state.items];
}

export default useFetch;
