#!/bin/bash

# Install necessary dependencies
sudo apt-get update
sudo apt-get install -y build-essential cmake libgtest-dev

# Build Google Test
cd /usr/src/gtest
sudo cmake CMakeLists.txt
sudo make
sudo cp *.a /usr/lib

# Clone the repository
git clone <repository_url>
cd iot_home_automation

# Build daemon process
mkdir -p daemons/build
cd daemons/build
cmake ..
make

# Build server
cd ../../server
npm install

# Build web interface
cd ../web
npm install

echo "Installation complete. Use deploy.sh to start the system."
