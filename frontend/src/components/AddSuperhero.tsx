// frontend/src/components/AddSuperhero.tsx
import React, { useState } from "react";

// Interfaz para describir la estructura de los datos del superhéroe
interface Superhero {
	name: string;
	superpower: string;
	humilityScore: number;
}

interface AddSuperheroProps {
	addSuperhero: (newSuperhero: Superhero) => void; // Función para agregar un superhéroe
}

const AddSuperhero: React.FC<AddSuperheroProps> = ({ addSuperhero }) => {
	// Estado para los campos del formulario
	const [name, setName] = useState<string>("");
	const [superpower, setSuperpower] = useState<string>("");
	const [humilityScore, setHumilityScore] = useState<number>(0);

	// Función para manejar el envío del formulario
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault(); // Evitar que la página se recargue al enviar el formulario

		const newSuperhero: Superhero = { name, superpower, humilityScore };

		try {
			// Enviar el nuevo superhéroe al backend usando una solicitud POST
			const response = await fetch("http://localhost:3000/superheroes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newSuperhero),
			});

			if (response.ok) {
				// Si la respuesta es exitosa, agregar el nuevo superhéroe a la lista
				addSuperhero(newSuperhero); // Actualizar la lista de superhéroes en el componente principal
				setName("");
				setSuperpower("");
				setHumilityScore(0);
				alert("Superhero added successfully!");
			} else {
				alert("Failed to add superhero");
			}
		} catch (error) {
			console.error("Error adding superhero:", error);
			alert("Error adding superhero");
		}
	};

	return (
		<div>
			<h2>Add a New Superhero</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="superpower">Superpower: </label>
					<input
						type="text"
						id="superpower"
						value={superpower}
						onChange={(e) => setSuperpower(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="humilityScore">Humility Score: </label>
					<input
						type="number"
						id="humilityScore"
						value={humilityScore}
						onChange={(e) => setHumilityScore(Number(e.target.value))}
						min="0"
						max="10"
						required
					/>
				</div>
				<button type="submit">Add Superhero</button>
			</form>
		</div>
	);
};

export default AddSuperhero;
