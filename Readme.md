# 🏆 Hackathon Tracker - MERN Stack Website

An interactive platform that tracks upcoming hackathons in the next 3 months and displays live events happening in the next 7 days. Users can view the details of each hackathon, track their distance to events, and register for them via the host websites.

---

## 🚀 **Purpose**

The Hackathon Tracker provides an easy-to-use interface for developers, enthusiasts, and hackers to find upcoming hackathons, see live events on a map, and track key information such as:
- **Location** (with distance tracking to user's current location) 📍
- **Problem Statements** 📝
- **Number of Participants** 👥
- **Prize Pool** 🎁
- **Team Size** 👫
- **Registration Redirect** 🔗

Additionally, the platform uses an interactive map to show live hackathons with color-coded pins based on how close the event is.

---

## 🛠 **Tech Stack**

- **Frontend**: React, TailwindCSS, DaisyUI, Google Maps API (or Mapbox)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Vercel (Frontend), Heroku/Railway (Backend), MongoDB Atlas

---

## 🌟 **Features**

- View all hackathons happening in the next 3 months.
- See hackathons occurring in the next 7 days on an interactive map with color-coded pins:
  - **Purple**: Live hackathon (today).
  - **Green**: More than 4 days remaining.
  - **Yellow**: More than 2 days remaining.
  - **Red**: Less than 2 days remaining.
- Track distance to the hackathon location using your live position.
- Login and signup for personalized features (like saving favorite hackathons).
- Clean and responsive UI using **DaisyUI** and **TailwindCSS**.

---

## 🖥 **Setup Guide**

Follow these steps to set up the Hackathon Tracker project on your local machine:

### 1. **Clone the Repository** 🧑‍💻
```bash
git clone https://github.com/yourusername/hackathon-tracker.git
cd hackathon-tracker
```

### 2. Install Dependencies 🛠
Backend:
```bash 
cd server
npm install

```

Frontend:
```bash 
cd ../client
npm install

```

### 3. Configure Environment Variables 🔐
Create a .env file in the server folder with the following content:
```bash
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
PORT=5000
```
For Google Maps API (or Mapbox), set up the API keys for your map in the frontend environment.

### 4. Run the Application 🚀
Backend:
```bash
cd server
npm run dev

```

Frontend:
```bash
cd ../client
npm start
```

📂 Project Structure
```bash
hackathon-tracker/
│
├── client/                     # React Frontend
│   ├── src/                    # React Components & Pages
│   ├── public/                 # Public Assets
│   └── package.json            # React Dependencies
│
├── server/                     # Node.js Backend
│   ├── models/                 # Mongoose Models (Hackathons, Users)
│   ├── routes/                 # API Routes (Auth, Hackathons)
│   ├── controllers/            # Controllers for CRUD Operations
│   ├── server.js               # Express.js Main Server File
│   └── package.json            # Backend Dependencies
│
├── README.md                   # Project Documentation
└── .env                        # Environment Variables
```