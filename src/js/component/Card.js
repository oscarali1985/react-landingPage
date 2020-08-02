import React from "react";
import PropTypes from "prop-types";

import img500 from "../../img/500x325.png";

export const Card = ({
	name = "Card title",
	color = "white",
	imagen = img500
}) => {
	return (
		<div
			className={"card mx-2 my-2 w-100"}
			style={{
				width: "18rem",
				backgroundColor: color,
				color: "black",
				textAlign: "center"
			}}>
			<img
				src={imagen}
				className="card-img-top"
				alt="imagen de la persona"
			/>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">
					{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore modi veniam repellendus soluta eligendi quos voluptates illum quam aperiam?`}
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	imagen: PropTypes.string
};
