# Personal Blog App - Vue.js Frontend

Welcome to the frontend repository of my Personal Blog App, a full-stack blog application developed using Spring Boot, Vue.js, and PostgreSQL. This front end provides an interactive and engaging user interface for exploring and interacting with blog posts.

## Features

- **User-friendly Interface:** A dynamic and responsive frontend built with Vue.js for a seamless user experience.
- **Integration with Backend:** Connects with the Spring Boot backend API to fetch and display blog content.
- **Azure Deployment:** Hosted on Azure Static Web Apps to ensure reliable and fast content delivery.

## Tech Stack

- **Vue.js:** Frontend framework for building modern and reactive user interfaces.
- **Azure Services:**
  - **Azure Static Web Apps:** Hosts the application's front end.

## Setup Instructions

### Prerequisites

- Node.js and npm installed

### Steps

1. **Clone the Repository:**

   ```
   git clone https://github.com/your-username/personal-blog-frontend.git
   cd personal-blog-frontend

   ```

2. **Install Dependencies:**
   ```
   npm install

   ```
3. **Configure Backend Endpoint:**
   Update the API endpoint in the /src/config.js file:

   ```
   export let BASE_URL = 'https://your-backend-api-url';

   ```

4. **Run the Vue.js Application:**
   ```
   npm run serve
   ```
The application will be accessible at http://localhost:8080.

## Deployment
The frontend is automatically deployed using Azure Static Web Apps whenever changes are pushed to the main branch.

Checkout the backend repository [here](https://github.com/hazzaRR/PersonalBlogSpring).
   
