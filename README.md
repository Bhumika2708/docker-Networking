Docker Microservices Application

A simple microservices-based web application built using Docker, consisting of a React frontend and a Flask backend.

The project demonstrates containerization, service communication, and real-world Docker networking concepts.

Architecture
Browser → React Frontend (Docker) → Flask Backend (Docker)


Frontend: http://localhost:3000

Backend: http://localhost:5000

Tech Stack

React + Tailwind CSS

Python Flask

Docker

Nginx

How to Run
Using Docker Compose (Recommended)
docker-compose up --build


Open:

http://localhost:3000

Key Learnings

Docker images vs containers

Port mapping and networking

Frontend-backend communication

Host vs Docker network boundaries

Real-world debugging using Docker CLI
