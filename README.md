# shopping-store

This project is a full-fledged **shopping-store** built using **React**, **Redux**, **TypeScript**, and **Tailwind CSS**. It provides functionality for users to browse products, add items to their cart.Its compeletly accessible and responsive for every screen size and devices.

## Table of Contents

- [shopping-store](#shopping-store)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Project Structure](#project-structure)
    - [Technologies Used](#technologies-used)
    - [License](#license)

## Features

- **Product Browsing**: View a list of products with detailed descriptions.
- **Shopping Cart**: Add products to a cart and proceed to checkout.
- **Order Management**: View order history and track the status of purchases.
- **Responsive Design**: Fully responsive UI using Tailwind CSS.
- **Redux State Management**: Centralized state management for handling product data, user authentication, and shopping cart functionality.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/iqram3/shopping-store.git
cd shopping-store

npm install
# OR
yarn install

 ### Available Scripts
    
In the project directory, you can run the following scripts:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload when changes are made, and you will see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.
Utilize this to run unit tests and ensure app functionality.
For more information, refer to the running tests documentation.

npm run build
Builds the app for production in the build folder.
It bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!
See deployment documentation for more details.
```
### Project Structure
.
├── public              # Static files
├── src
│   ├── components      # Reusable UI components
│   ├── pages           # Main pages (Home, ProductDetail, Cart)
│   ├── redux           # Redux store, slices, and actions
│   ├── routes          # Routing for the Application

### Technologies Used

 - **React:** A JavaScript library for building user interfaces.
 - **Redux:** A predictable state container for JavaScript apps.
 - **TypeScript:** A statically typed superset of JavaScript.
 - **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
 - **Axios:** A promise-based HTTP client for the browser and Node.js.
 - **react-router-dom:** Declarative routing for React applications.

### License
This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

This updated `README.md` now includes:

- **Project Description**: An overview of the project and its features.
- **Getting Started**: Instructions for cloning the project, installing dependencies, and setting up the environment variables.
- **Technologies Used**: A list of the key tools and frameworks.
- **License**: Information about the project's license.
