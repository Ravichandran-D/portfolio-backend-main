# MERN Portfolio

This is a personal portfolio website built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). The portfolio showcases various projects, provides information about me, and allows users to get in touch via a contact form.

## Features

- **Home Page**: Introduction to the portfolio with a brief description and navigation to different sections.
- **Projects Section**: Displays a list of projects built using different technologies such as HTML, CSS, React, and MERN stack.
- **About Me**: A section showcasing details about me including skills, experience, and education.
- **Contact Form**: A simple form to allow visitors to send me a message. The form sends emails via Node.js and Nodemailer.
- **Responsive Design**: The website is fully responsive and works on desktop, tablet, and mobile devices.

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS (for styling)
  - Framer Motion (for animations)
  
- **Backend**:
  - Node.js
  - Express.js
  - Nodemailer (for email functionality)

- **Database**:
  - MongoDB (optional, for storing user messages)

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/somugowdasoft/portfolio-backend.git
cd portfolio-backend

```

### Install dependencies
```bash
npm install
```

### Run the frontend server:

```bash
npm start
```

## Setup environment variables:

1. Create a .env file in the server directory.

2. Add the following environment variables:

```bash
PORT=5000
EMAIL_USER=your-email@gmail.com
PASS_USER=your-email-password
```
 note: Replace your-email@gmail.com and your-email-password with your actual email and password.

## Run the backend server:

```bash
npm start
```

## Connecting Frontend and Backend
Make sure both the frontend and backend servers are running on different ports (3000 for frontend and 5000 for backend).
In the frontend, you might need to configure the contact form to send requests to the backend (e.g., http://localhost:5000/submit).
