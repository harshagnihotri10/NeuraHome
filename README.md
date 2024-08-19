
# **NeuraHome**
An intelligent home automation system that manages smart devices using a blend of IoT technologies and cloud computing. Built to enhance home security, energy efficiency, and comfort by seamlessly integrating and controlling smart devices in a home environment.

---

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Code Structure](#code-structure)
- [Contributing](#contributing)

---

## **Features**
- Real-time smart device control and monitoring
- Secure cloud-based communication between devices
- Integration with Google Home and Alexa for voice control
- Automated scheduling for device operations
- Supports multiple user roles and customizable settings

---

## **Tech Stack**
- **Backend**: C++, Node.js (Express.js)
- **Frontend**: React.js
- **Cloud**: AWS
- **Database**: MongoDB
- **Automation Scripts**: Shell scripting
- **DevOps**: Docker, Kubernetes, GitHub Actions

---

## **Installation**

### **Clone the Repository**
```bash
git clone https://github.com/harshagnihotri10/NeuraHome.git
```

### **Backend Setup (Server)**
1. Navigate to the `server` directory:
   ```bash
   cd server/src
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### **Frontend Setup (Web)**
1. Navigate to the `web` directory:
   ```bash
   cd web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

### **Daemon Process**
1. Compile the C++ daemon process:
   ```bash
   g++ daemon_Process.cpp -o daemonProcess
   ./daemonProcess
   ```

---

## **Usage**
1. Register a new account and log in through the web interface.
2. Add and connect your smart devices.
3. Control the devices via the web app or mobile app.
4. Automate device operations using the scheduling feature or voice commands.

---

## **API Reference**

### **Device Control**
- **POST** `/api/device/control`
  - **Description**: Sends a control signal to the connected smart device.
  - **Request Body**:
    ```json
    {
      "deviceId": "device_123",
      "action": "turn_on"
    }
    ```

### **Device Status**
- **GET** `/api/device/status`
  - **Description**: Retrieves the current status of the connected devices.

---

## **Code Structure**
- **`scripts/`**: Shell scripts for automating installation and deployment
  - **`deploy.sh`**: Automates the deployment process on AWS infrastructure
  - **`install.sh`**: Sets up required dependencies and environments
- **`server/`**: Node.js backend service
  - **`src/`**: Main backend logic
    - **`server.js`**: Express.js server setup
  - **`tests/`**: Unit tests for backend logic
    - **`server.test.js`**: Test file for backend functionalities
- **`web/`**: React.js frontend application
  - **`package.json`**: Project dependencies and scripts for the frontend
  - **`src/`**: Source code for React components
    - **`App.js`**: Main application file
- **`daemon_Process.cpp`**: C++ file for running daemon process to monitor device status
- **`daemon_tests.cpp`**: C++ test file for validating daemon process logic

---

## **Best Practices**
- **Code Quality**: ESLint is enforced for consistent code formatting.
- **Testing**: Unit and integration tests are implemented using Jest for JavaScript and C++ tests for daemon processes.
- **Security**: Secure authentication with role-based access control (RBAC) and encryption of sensitive data.

---

## **Contributing**
Contributions are welcome! Please follow contribution guidelines and submit your PRs with appropriate testing.

---
