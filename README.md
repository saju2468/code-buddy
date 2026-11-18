# CodeBuddy Backend

CodeBuddy is a matchmaking platform designed specifically for software developers to connect, collaborate, and network. This repository contains the backend REST API built using **Node.js** and **Express.js**.

---

## 🚀 Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** MongoDB *(upcoming)*
- **Package Manager:** npm

---

## 📁 Project Structure

```text
codebuddy-backend/
├── src/
│   └── app.js          # Express app entry point & route definitions
├── .gitignore          # Git ignore configuration
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact dependency tree lockfile
└── README.md           # Project documentation
```

---

## 🛠️ Getting Started & Setup Steps

Follow these steps to set up and run the project locally on your machine:

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Git](https://git-scm.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/saju2468/devTinder.git
cd codebuddy-backend
```

### 3. Install Dependencies
Install the required npm packages:
```bash
npm install
```

### 4. Run the Server

#### Development Mode (with auto-reload):
```bash
npm run dev
```

#### Production / Standard Mode:
```bash
npm start
```

The server will start listening at:
```text
http://localhost:3000
```

---

## 📡 API Endpoints (Current Progress)

| Method | Endpoint | Description | Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/user` | Fetch user profile information | Active |
| `POST` | `/user` | Save user data to the database | Active |
| `USE` | `/test` | Test endpoint to verify server status | Active |

---

## 📌 Development Roadmap

- [x] Initial Express server setup & routing
- [ ] Connect to MongoDB using Mongoose
- [ ] User schema definition & validation
- [ ] User Authentication & Authorization (Sign up, Login, JWT tokens)
- [ ] Profile management (Skills, Bio, Experience, Photos)
- [ ] Connection request logic (Interested / Ignore / Accept / Reject)
- [ ] Feed generation API (Show matching developer profiles)

---

## 👨‍💻 Author

- **Sajin PP** - [GitHub Profile](https://github.com/saju2468)
