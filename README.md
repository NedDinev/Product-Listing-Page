**Product Listing Page**

Welcome to the documentation for the Product Listing Page. This project is a simple web application that showcases a product listing page, where users can browse and view various products and categories. The application is built using React, and it utilizes React components, hooks, and routing to create a seamless user experience.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
2. [Project Structure](#project-structure)
3. [Technologies Used](#technologies-used)
4. [Features](#features)


## Getting Started

### Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/NedDinev/Product-Listing-Page.git
```

2. Change into the project directory:

```bash
cd client
```

3. Install project dependencies:

```bash
npm install
```

### Running the Application

Once the installation is complete, you can start the development server:

```bash
npm start
```

This command will start the development server, and the application will be accessible at `http://localhost:3000`.

## Project Structure

The project follows a standard React project structure:

```
├── public/
│   ├── images/
│   │   └── ...
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Product.js
│   │   ├── ProductList.js
│   │   └── ...
│   ├── data.js
│   │ 
│   ├── App.js
│   ├── index.js
│   │ 
│   ├── utils/
│   │   ├── productsUtils.js
│   │   ├── textFormat.js
│   │   └── ...
│   └── ...
├── package.json
└── ...
```


## Technologies Used

The primary technologies and libraries used in this project are:

- React: A popular JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- React Bootstrap: A React library for Bootstrap components.
- Font Awesome: A library for icons used in the application.

## Features

The Product Listing Page application includes the following features:

- Navigation with logo, and dynamic categories.
- Displaying a list of products with their names, ratings, description, prices, images, and "add to cart button".
- "Load more" button to show more products in the category.
- A filter grid to filter products by price and material.
- Sorting options - alphabetically a-z, alphabetically z-a, price ascending, price descending

