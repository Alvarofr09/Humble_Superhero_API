// frontend/src/components/SuperheroesList.tsx
import React from "react";

// Interfaz para describir la estructura de los datos del superhéroe
interface Superhero {
	name: string;
	superpower: string;
	humilityScore: number;
}

interface SuperheroesListProps {
	superheroes: Superhero[];
}

const SuperheroesList: React.FC<SuperheroesListProps> = ({ superheroes }) => {
	return (
		<div>
			<h2>Superheroes List</h2>
			<ul>
				{superheroes.map((superhero, index) => (
					<li key={index}>
						<strong>{superhero.name}</strong> - {superhero.superpower} (Humility
						Score: {superhero.humilityScore})
					</li>
				))}
			</ul>
		</div>
	);
};

export default SuperheroesList;
