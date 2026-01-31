## Frontend Development Mode: 
| Thing            | Meaning               |
| ---------------- | --------------------- |
| `frontend/`      | Your frontend service |
| `npm start`      | Local dev server      |
| `localhost:3000` | Where browser talks   |
| `App.js`         | Brain of UI           |


### We treat backend as:

A black box

Just something that listens on a port

Just something Docker can talk to

## backend in micronet
docker run -d --name backend --network micro-net flask-backend

### frontend in micronet
docker run -d --name frontend --network micro-net -p 3000:80 react-frontend

## The Cloud Version (AWS / Server)

On a server:
git clone your-repo
cd docker-network-project
docker-compose up -d


🔹 Project Summary: Docker Networking with Frontend & Backend

In this project, I built a real microservices system using Docker, where a React frontend and a Flask backend run as separate containers and communicate with each other. The main goal was to understand Docker networking, how services talk to each other, and how browsers interact with containers in real-world systems. I first created a professional React UI and Dockerized it using a multi-stage Dockerfile with Nginx. Then I created a simple Flask backend API, Dockerized it, and ran both services using Docker containers.

🔹 How the System Works (Architecture)

The final working architecture is:

Browser → React Frontend (Docker) → Flask Backend (Docker)


The browser accesses the frontend at: http://localhost:3000

The frontend calls the backend at: http://localhost:5000

The backend returns a response string

The frontend shows it using an alert

Both frontend and backend are:

Running in separate containers

Built from their own Docker images

Communicating using HTTP

This is a basic microservices architecture, where each service is independent and containerized.

🔹 Core Concepts I Learned
1. Docker Images vs Containers

A Docker image is a frozen snapshot of the app.
A container is a running instance of that image.
Every time I changed code, I had to:

docker build → docker run

Docker does not auto-update like npm start.

2. Docker Networking (The Biggest Lesson)

Docker creates its own internal network.
Inside Docker:

Containers can talk using container names

Example: http://backend:5000

But the browser is outside Docker.

So:

Browser ❌ cannot access backend

Browser ✅ can access localhost

This was the main bug.

🔹 The Main Problem I Faced

The biggest problem was this error:

"Failed to fetch"

This happened because:

I was using fetch("http://backend:5000") in React

But React runs in the browser

The browser cannot resolve Docker DNS names

So the request never reached the backend.

🔹 How I Solved It

I fixed it by:

Exposing backend to host:

docker run -d -p 5000:5000 flask-backend


Updating frontend:

fetch("http://localhost:5000")


Now:

Browser can see backend

Backend responds correctly

Frontend shows alert

Problem solved.

🔹 Real DevOps Debugging I Did

During this project, I learned how real engineers debug:

Used docker ps to check containers

Used docker logs to see backend errors

Found missing dependency (flask-cors)

Fixed Dockerfile and rebuilt

Used curl inside container to test networking

Did full image resets using:

docker rm
docker rmi
docker build


This is real production-style debugging, not tutorial stuff.

🔹 Final Learning Outcome (Very Important)

By completing this project, I now understand:

Difference between host network and Docker network

How Docker DNS works

Why port mapping (-p) is required

How microservices communicate

Why frontend-backend issues happen in production

The full build → run → debug cycle