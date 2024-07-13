#!/bin/bash

# Start daemon process
cd ../daemons/build
./daemon_process &

# Start server
cd ../../server
node src/server.js &

# Start web interface
cd ../web
npm start

echo "System deployed. Access the web interface at http://localhost:3000"
