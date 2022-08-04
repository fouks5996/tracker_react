import React from "react";
import { useState } from "react";

function ButtonRead(props) {
	const { label, labelClicked, data } = props;
	const [actions, setActions] = useState(false);

	function changeRead() {
		setActions((actions) => !actions);
		actions ? (data.read = false) : (data.read = true);
		console.log(actions);
	}

	return (
		<button
			onClick={changeRead}
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

export default ButtonRead;
