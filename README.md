🐾 PetShop API

A simple REST API built with TypeScript and Express.js for managing pet data.

This project was created to practice building a backend application with TypeScript, Express routing, request/response handling, route parameters, and basic data operations.

🚀 Tech Stack
Node.js
Express.js
TypeScript
npm
📁 Project Structure
petShop/
├── src/
│   └── ...
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
✨ Features
RESTful API structure
TypeScript-based Express server
Pet data management
Dynamic route parameters
JSON responses
Basic pet searching using JavaScript array methods
🔌 API Example
Get a Pet by ID
GET /:id

Example:

GET /1

The API retrieves the id from the request parameters and searches for the matching pet.

const { id } = req.params;

const pet = pets.find(pet => pet.id === id);

res.json(pet);
🛠️ Getting Started
1. Clone the repository
git clone https://github.com/tanjiyaJuthi/petShop.git
2. Navigate to the project
cd petShop
3. Install dependencies
npm install
4. Start the development server

Use the development script defined in package.json:

npm run dev

If your project uses a different script, check the scripts section of package.json.

📌 Learning Goals

This project focuses on learning:

TypeScript fundamentals
Express.js with TypeScript
Type annotations
Express Request and Response types
Route parameters
REST API design
Array methods such as .find()
Project configuration with tsconfig.json