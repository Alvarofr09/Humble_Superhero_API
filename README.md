# Superheroes App

This project is a full-stack application built using **NestJS** for the backend and **React (with Vite)** for the frontend. The app allows users to add superheroes and display them in a list sorted by their humility score.

## Features
- **Backend** (NestJS):
  - Provides a REST API with endpoints to add and retrieve superheroes.
  - Uses an in-memory database stored in a JSON file.
  - Automatically sorts superheroes by humility score when retrieving them.

- **Frontend** (React + Vite):
  - Displays a list of superheroes.
  - Allows adding new superheroes via a form.
  - Updates the list dynamically without reloading the page.

## Project Structure
```
/superheroes-app
├── backend
│   ├── src
│   │   ├── superheroes
│   │   │   ├── superheroes.controller.ts
│   │   │   ├── superheroes.service.ts
│   │   │   ├── superhero.entity.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   ├── db.json (mock database)
│   ├── package.json
│   ├── tsconfig.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── AddSuperhero.tsx
│   │   │   ├── SuperheroesList.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│
├── README.md
```

## Getting Started

### Backend Setup (NestJS)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the NestJS server:
   ```sh
   npm run start
   ```
   The backend will run at **http://localhost:3000**.

### Frontend Setup (React + Vite)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The frontend will run at **http://localhost:5173**.

## API Endpoints
| Method | Endpoint         | Description                        |
|--------|-----------------|------------------------------------|
| GET    | `/superheroes`  | Retrieve the list of superheroes sorted by humility score |
| POST   | `/superheroes`  | Add a new superhero (name, superpower, humility score required) |

## How It Works
1. Open the frontend in your browser.
2. Add a new superhero using the form.
3. The new superhero is added to the backend and displayed instantly in the list.

## Technologies Used
- **Backend:** NestJS, TypeScript, Node.js
- **Frontend:** React, Vite, TypeScript
- **Data Storage:** JSON file (mock database)

---
### Author
Developed by **Alvaro Frias**.

