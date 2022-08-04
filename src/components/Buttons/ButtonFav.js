import React from "react";
import { useState } from "react";

function Button(props) {
	const { label, labelClicked, data } = props;
	const [actions, setActions] = useState(false);

	function changeFav() {
		setActions((actions) => !actions);
		actions ? (data.isFav = false) : (data.isFav = true);
		console.log(actions);
	}

	return (
		<button
			onClick={changeFav}
			type='submit'
			className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
				!actions
					? " bg-slate-400 focus:ring-slate-500"
					: "bg-green-700 focus:ring-green-500"
			}  focus:outline-none focus:ring-2 focus:ring-offset-2 `}>
			{!actions ? label : labelClicked}
		</button>
	);
}

export default Button;
