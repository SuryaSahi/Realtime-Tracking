# Real-Time Device Tracking System

## 🚀 **Overview**

Welcome to the **Real-Time Device Tracking System**! This project allows you to track the live location of devices on an interactive map. Built using **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**, it allows multiple users to share their locations in real-time on a dynamic map. This project demonstrates the power of real-time communication and location-based tracking.

---

## 💡 **Features**

- **Real-Time Location Tracking**: Tracks and displays multiple users' live locations on a map.
- **Interactive Map with Leaflet.js**: A highly interactive and responsive map that updates in real-time.
- **Socket.IO for Real-Time Communication**: Uses WebSockets (Socket.IO) for instant communication between the server and clients.
- **Multiple User Support**: Allows multiple users to connect and share their location with others dynamically.
- **Geolocation Support**: Utilizes the browser’s geolocation API to get users' latitude and longitude.

---

## 🔧 **Technologies Used**

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js, making it easy to set up a server.
- **Socket.IO**: Real-time, bi-directional communication between clients and servers.
- **Leaflet.js**: A powerful open-source library for creating interactive maps.
-**ejs** : A templating engine to render dynamic HTML content.

---

## ⚡ **How It Works**

### 1. **Server Setup (Node.js & Express)**

The application is powered by a Node.js server using the Express.js framework. The server handles HTTP requests and serves static files, including the map and client-side JavaScript. It also sets up Socket.IO to handle real-time communication between clients.

### 2. **Client-Side (Leaflet.js & Socket.io)**

The client-side uses **Leaflet.js** for rendering the map and **Socket.io** to get the user's current location. Once the location is obtained, it is emitted to the server via Socket.IO. The server then broadcasts this information to all connected clients.

### 3. **Real-Time Communication with Socket.IO**

When one user shares their location, it is instantly broadcast to all connected users, updating their maps in real-time. This ensures that everyone is always seeing the most up-to-date location information.

---

## 🛠️ **Installation & Setup**

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/SuryaSahi/Realtime-Tracking-System.git
```

## Install Dependencies
Navigate to the project directory and install the required dependencies:
cd Realtime-Tracking-System

## npm install express ejs socket.io
This will install all the necessary packages, including Express and Socket.IO.

## Start the Server
To start the server, run the following command:

## npx nodemon app.js

The server will start on port 3000 by default.

## Open the Application
Once the server is running, open your browser and navigate to:
### http://localhost:3000
You should see the interactive map, and the application will begin tracking and displaying your location.

👥 How to Use
Share Your Location: When you open the application, your device will request permission to access your location. Allow it to share your location with the application.

See Real-Time Tracking: As soon as you share your location, it will be displayed on the map. Any other connected users will be able to see your location in real-time as well.

Multiple Users: If you open the app on multiple devices or browsers, you’ll see the locations of all users on the map, updating in real-time.

Zoom In/Out on Map: You can zoom in and out on the map to see a more detailed or broader view of the locations.

🛠️ Future Enhancements
User Authentication: Add authentication for users so that each user can track their devices and other users’ devices securely.
Location History: Store historical location data and display it on the map for specific time periods.
Notifications: Send notifications to users when another device enters or leaves a certain area.
Mobile App Integration: Create a mobile app for better location accuracy and real-time tracking.
