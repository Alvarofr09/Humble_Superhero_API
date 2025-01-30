// frontend/src/App.tsx
import React, { useState, useEffect } from "react";
import SuperheroesList from "./components/SuperheroesList";
import AddSuperhero from "./components/AddSuperhero";

// Interfaz para describir la estructura de los datos del superhéroe
interface Superhero {
	name: string;
	superpower: string;
	humilityScore: number;
}

const App: React.FC = () => {
	// Estado para almacenar la lista de superhéroes
	const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

	// Obtener la lista de superhéroes del backend cuando se monta el componente
	useEffect(() => {
		fetchSuperheroes();
	}, []);

	// Función para obtener la lista de superhéroes del backend
	const fetchSuperheroes = async () => {
		const response = await fetch("http://localhost:3000/superheroes");
		if (response.ok) {
			const data = await response.json();
			setSuperheroes(data);
		} else {
			alert("Failed to fetch superheroes");
		}
	};

	// Función para agregar un superhéroe y actualizar la lista
	const addSuperhero = (newSuperhero: Superhero) => {
		setSuperheroes([...superheroes, newSuperhero]);
	};

	return (
		<div>
			<h1>Superheroes App</h1>
			{/* Pasar la función addSuperhero y la lista de superhéroes al componente AddSuperhero */}
			<AddSuperhero addSuperhero={addSuperhero} />
			{/* Pasar la lista de superhéroes al componente SuperheroesList */}
			<SuperheroesList superheroes={superheroes} />
		</div>
	);
};

export default App;
