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
- **Geolocation API**: Used for tracking users' location using their device’s GPS.

---

## ⚡ **How It Works**

### 1. **Server Setup (Node.js & Express)**

The application is powered by a Node.js server using the Express.js framework. The server handles HTTP requests and serves static files, including the map and client-side JavaScript. It also sets up Socket.IO to handle real-time communication between clients.

### 2. **Client-Side (Leaflet.js & Geolocation API)**

The client-side uses **Leaflet.js** for rendering the map and **Geolocation API** to get the user's current location. Once the location is obtained, it is emitted to the server via Socket.IO. The server then broadcasts this information to all connected clients.

### 3. **Real-Time Communication with Socket.IO**

When one user shares their location, it is instantly broadcast to all connected users, updating their maps in real-time. This ensures that everyone is always seeing the most up-to-date location information.

---

## 🛠️ **Installation & Setup**

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/SuryaSahi/Realtime-Tracking-System.git
