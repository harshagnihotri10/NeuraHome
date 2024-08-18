# NeuraHome
An intelligent home automation system that manages smart devices using IoT technologies and cloud computing. Built to improve home security, energy efficiency, and overall comfort, NeuraHome offers real-time control and automated scheduling for smart homes.

---

![Build Status](https://travis-ci.com/harshagnihotri10/NeuraHome.svg?branch=main) ![Coverage](https://codecov.io/gh/harshagnihotri10/NeuraHome/branch/main/graph/badge.svg)

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

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

## API Reference

### Authentication
#### POST /api/auth/login
- **Description**: Logs a user in and returns a JWT.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "your.jwt.token"
  }
  ```

### Get Devices
#### GET /api/devices
- **Description**: Retrieves a list of all connected devices.

---

## Code Structure

```
.
├── scripts
│   ├── deploy.sh
│   └── install.sh
├── server
│   ├── src
│   │   └── server.js
│   ├── tests
│   │   └── server.test.js
├── web
│   ├── package.json
│   ├── src
│   │   └── App.js
├── Readme.md
├── daemon_Process.cpp
└── daemon_tests.cpp
```

---

## Best Practices
- **Code Quality**: ESLint and Prettier for consistent code style.
- **Testing**: Unit and integration tests using Jest.
- **Security**: JWT authentication and role-based access control for secure access.

---

## Contributing
We welcome contributions! Please follow the code of conduct and ensure all tests pass before submitting a pull request.

---

