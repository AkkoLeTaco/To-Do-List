import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [list, setList] = useState([]);
	const sent = (del) => {
		const dele = list.filter((lists, index) => index !== del);
		setList(dele);
	};
	return (
		<>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder=" "
					onChange={(e) => setItem(e.target.value)}
					value={item}
				/>
				<a
					onClick={() => {
						if (item !== "") {
							setList([...list, item]);
							setItem(" ");
						}
					}}
					type="button"
					className="btn btn-primary"
					id="basic-addon1">
					Button
				</a>
			</div>
			<ul>
				<li>
					{list.map((lists, index) => (
						<li key={index}>
							{lists}
							<button
								className="btn btn-danger"
								onClick={() => {
									sent(index);
								}}>
								X
							</button>
						</li>
					))}
				</li>
			</ul>
		</>
	);
};

export default Home;
