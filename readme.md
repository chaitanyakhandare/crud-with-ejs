# Profile Management System

## Description
This is a simple Profile Management System built using Express.js and MongoDB. It allows users to create, read, update, and delete profiles without any authentication. The application takes input for profiles, including name, email, and image URL, providing a straightforward way to manage contact information.

## Features
- **Create Profile**: Users can add new profiles with name, email, and image URL.
- **Read Profiles**: Display a list of all created profiles.
- **Update Profile**: Edit existing profiles to update the name, email, and image URL.
- **Delete Profile**: Remove profiles from the system.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing profile data.
- **EJS**: Template engine for rendering HTML views.

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Routes
- `GET /`: Render the homepage.
- `GET /read`: Display all profiles.
- `POST /create`: Create a new profile.
- `GET /show/:userid`: Show details of a specific profile.
- `POST /update/:userid`: Update an existing profile.
- `GET /edit/:userid`: Render the edit page for a specific profile.
- `GET /delete/:id`: Delete a specific profile.

