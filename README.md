# Gamebook

## Description
This project is a full-stack web application built with React and Tailwind CSS on the frontend and Express.js on the backend. The project is split into two main folders:
- `client`: The frontend application built with React and styled using Tailwind CSS.
- `server`: The backend REST API built with Express.js.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features
- Full-stack app with client-server architecture.
- Frontend built with React and styled using Tailwind CSS for responsive UI.
- RESTful API powered by Express.js.
- Modular folder structure for scalable development.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: (Add if you're using one, e.g., MongoDB, PostgreSQL, etc.)

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v14+)
- npm or yarn

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-project-name.git
    cd your-project-name
    ```

2. **Install dependencies for both client and server:**

    ```bash
    # Install server dependencies
    cd server
    npm install
    
    # Install client dependencies
    cd ../client
    npm install
    ```

3. **Set up environment variables:**

    - In the `server` folder, create a `.env` file and add necessary variables (like DB_URI, PORT, etc.). Example:
    ```bash
    PORT=5000
    DB_URI=your-database-uri
    ```

    - In the `client` folder, if you have any API keys or environment variables, create a `.env` file in the same way.

4. **Run the server and client:**

    - **Server** (Express backend):
    ```bash
    cd server
    npm start
    ```

    - **Client** (React frontend):
    ```bash
    cd ../client
    npm start
    ```

5. **Access the app:**
    - Client: `http://localhost:3000`
    - Server: `http://localhost:5000/api`

## Folder Structure
