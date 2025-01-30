import React, { useState, useEffect } from "react";
import SuperheroesList from "./components/SuperheroesList";
import AddSuperhero from "./components/AddSuperhero";
import "./index.css";

// Interface to define the structure of a superhero object
interface Superhero {
	name: string;
	superpower: string;
	humilityScore: number;
}

const App: React.FC = () => {
	// State to store the list of superheroes
	const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

	// Fetch superheroes from the backend when the component mounts
	useEffect(() => {
		fetchSuperheroes();
	}, []);

	// Function to fetch the list of superheroes from the backend
	const fetchSuperheroes = async () => {
		const response = await fetch("http://localhost:3000/superheroes");
		if (response.ok) {
			const data = await response.json();
			setSuperheroes(data);
		} else {
			alert("Failed to fetch superheroes");
		}
	};

	// Function to add a new superhero and update the list
	const addSuperhero = (newSuperhero: Superhero) => {
		setSuperheroes([...superheroes, newSuperhero]);
	};

	return (
		<div className="container">
			{/* Form section on the left */}
			<div className="form-container">
				<h1>Superheroes App</h1>
				{/* Pass addSuperhero function to AddSuperhero component */}
				<AddSuperhero addSuperhero={addSuperhero} />
			</div>

			{/* Vertical separator (hidden on small screens) */}
			<div className="separator"></div>

			{/* List section on the right */}
			<div className="list-container">
				{/* Pass the list of superheroes to SuperheroesList component */}
				<SuperheroesList superheroes={superheroes} />
			</div>
		</div>
	);
};

export default App;
