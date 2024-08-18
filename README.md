# NeuraHome
An intelligent home automation system that manages smart devices using IoT technologies and cloud computing. Built to improve home security, energy efficiency, and overall comfort, NeuraHome offers real-time control and automated scheduling for smart homes.

---

![Coverage](https://codecov.io/gh/harshagnihotri10/NeuraHome/branch/main/graph/badge.svg)

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)

---

## Features
- Real-time device control via a web interface
- Secure cloud-based data storage and retrieval
- Integration with Google Home and Alexa
- Automated scheduling and voice-activated commands
- Energy consumption monitoring

---

## Tech Stack
- **Backend**: C++, Rust, Node.js
- **Frontend**: React.js, HTML, CSS
- **Cloud**: AWS (EC2, Lambda, S3)
- **Database**: PostgreSQL
- **DevOps**: Docker, Kubernetes, Travis CI

---

## Installation

### Clone the Repository
```bash
git clone https://github.com/harshagnihotri10/NeuraHome.git
```

### Backend Setup
Navigate to the `server` directory:
```bash
cd server
```
Install dependencies:
```bash
npm install
```
Start the server:
```bash
npm start
```

### Frontend Setup
Navigate to the `web` directory:
```bash
cd web
```
Install dependencies:
```bash
npm install
```
Start the frontend:
```bash
npm start
```

---

## Usage
1. Register a user and log in via the web interface.
2. Connect smart home devices to the NeuraHome system.
3. Use the web interface or voice commands to control devices and automate schedules.

---



## Code Structure

### Backend (`server/`)
- **src/**
  - `server.js`: The main backend file responsible for running the server and handling incoming requests.
- **tests/**
  - `server.test.js`: Contains test cases for validating the backend functionality.

### Frontend (`web/`)
- **src/**
  - `App.js`: The main entry point for the React application, handling routing and rendering of components.
- **package.json**: Contains frontend dependencies and project configurations for the React app.

### Daemon
- `daemon_Process.cpp`: Daemon process that handles the Makefile dependency parsing and optimization.
- `daemon_tests.cpp`: Unit tests to validate the daemon process functionality.

### Scripts (`scripts/`)
- `deploy.sh`: Script for deploying the application to cloud platforms.
- `install.sh`: Script for installing necessary dependencies for the project.


---

## Best Practices
- **Code Quality**: ESLint and Prettier for consistent code style.
- **Testing**: Unit and integration tests using Jest.
- **Security**: JWT authentication and role-based access control for secure access.

---

## Contributins
Contributions are welcome! Please follow the code of conduct and ensure all tests pass before submitting a pull request.

---

