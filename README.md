# Docker Microservices Application

A simple microservices-based web application built using Docker, consisting of a React frontend and a Flask backend. The project demonstrates containerization, service communication, and real-world Docker networking concepts.

---

## Architecture
**Frontend:** http://localhost:3000  
**Backend:** http://localhost:5000  

---

## Tech Stack
- React + Tailwind CSS  
- Python Flask  
- Docker  
- Nginx  

---

## Project Structure
docker-network-project/
├── backend/
│ ├── app.py
│ └── Dockerfile
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ ├── Dockerfile
│ ├── package.json
│ └── tailwind.config.js
│
├── docker-compose.yml
└── README.md


---

## How to Run

### Using Docker Compose (Recommended)

```bash
docker-compose up --build


