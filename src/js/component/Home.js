import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import img500 from "../../img/500x325.png";

import { Container } from "./Container";
import { Footer } from "./Footer";

//create your first component
export function Home(props) {
	// const [nombreDelEstado, setNombreDelEstado] = useState(valorInicialDelEstado)
	const [people, setPeople] = useState([]);
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	return (
		<div>
			<Container />
			<Footer />
		</div>
	);
}
