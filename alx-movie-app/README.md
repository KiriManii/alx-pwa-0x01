ALX PWA 0x01: Cine Seek Movie App - PWA Setup

This project focuses on transforming a Next.js movie application into a Progressive Web App (PWA) by integrating the next-pwa package. This initial task involves setting up the necessary dependencies to enable core PWA features like offline capabilities and installability.

Project Objectives:
The main goal for this project is to implement PWA features into the existing Next.js movie application.

Project Structure:
The main application code resides in the alx-movie-app/ directory within this repository.

Tasks Completed:
Here's a detailed breakdown of the tasks accomplished in this project:

0. Install Necessary Dependencies
Objective: To set up the next-pwa package to enable PWA features in our Cine Seek movie app.

Files Affected: package.json

Description:

The alx-project-0x14 repository was cloned into a new project named alx-pwa-0x01.

Navigated into the alx-movie-app directory.

The core PWA package, @ducanh2912/next-pwa, was installed using npm i @ducanh2912/next-pwa. This package is crucial for adding service worker capabilities and manifest generation in a Next.js environment.

webpack was installed as a development dependency using npm i -D webpack. Webpack is a module bundler that Next.js uses internally, and next-pwa often requires it to be explicitly present.

Verification was performed by checking package.json to ensure @ducanh2912/next-pwa (version ^10.2.9 or higher) and webpack (version ^5.94.0 or higher) were correctly listed in dependencies and devDependencies respectively.

Setup and Running the Application
To set up and run this project locally:

Clone the repository:

git clone https://github.com/KiriManii/alx-project-0x14.git alx-pwa-0x01

Navigate to the project directory:

cd alx-pwa-0x01/alx-movie-app

Install dependencies:

npm install

(This step covers the dependencies installed in Task 0 and any others from the base project.)

Run the development server:

npm run dev

Open your browser and navigate to http://localhost:3000.