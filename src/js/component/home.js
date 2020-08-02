import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import img500 from "../../img/500x325.png";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";

//create your first component
export function Home(props) {
	// const [nombreDelEstado, setNombreDelEstado] = useState(valorInicialDelEstado)
	const [people, setPeople] = useState([]);
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	return (
		<div className="container">
			<Jumbotron />

			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
}
