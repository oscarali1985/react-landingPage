import React from "react";

import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";

export const Container = () => {
	return (
		<div className="container justify-content-center">
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
		</div>
	);
};
