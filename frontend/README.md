# Fullstack App (Frontend with ReactJS)

## Overview

This is a fullstack application with an empty backend and a fully developed frontend using ReactJS. The frontend of the project is built with Vite and uses several libraries and tools, such as TailwindCSS, Flowbite and React Router DOM. This project includes unit and integration tests generated based on fuzzing system testing

## Technologies Used

- **Frontend**: ReactJS (v18)
- **Build tool**: Vite (latest version)
- **CSS Framework**: TailwindCSS, Flowbite
- **Routing**: React Router DOM.
- **Testing**: Vitest, React Testing Library, jsdom, Faker.js.
- **Package Manager**: npm (latest version, up to v22)
- **Node.js**: Latest version, up to v22

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- **Node.js** (latest version or up to v22)
- **npm** (latest version or up to v22)
- **Git** (for collaboration)
- Familiarity with basic JavaScript and ReactJS

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>

2. Navigate into the project directory:
    
    ```bash
    cd frontend
    npm i
    
This will create the node_modules directory and install the required packages for both the frontend and testing.

## Running the Project

To start the project locally:

1. Navigate to the frontend/src directory:
    
    ```bash
    cd frontend/src

2. Run the development server:
    
    ```bash
    npm run dev

3. Open your browser and go to:
    
    ```bash
    http://localhost:5173/

You should now see the home page of the app.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rulesa

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Featurea

- **A form** page with several input fields. The form must not be empty to enable the submit button.

- **Message page**: After submitting the form, users are redirected to the message page

- **Navigation**: From the message page, users can navigate back to the home page by clicking on "Back to Home".

- **Fuzzing system**: Simiulatingf tests to fuzz test.


## Navigation

- **Home page**: Users fill out a form, and upon clicking the submit button (enabled only if the form is filled), they are redirected to the message page.

- **Message page**: Once users have submitted the form, they are taken to the message page. There is a "Back to Home" button that navigates them back to the home page.


## Testing

All tests are located in the tests directory in the src folder.

The testing configuration can be found in the setup.js file within the tests directory.

To run tests using Vitest, simply run:
    
    ```bash
    npm run test
    
This will execute all the tests in the project.


## Contributing

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch (git checkout -b feature-branch).
4. Make changes and commit them (git commit -am 'Add new feature').
5. Push to your forked repository (git push origin feature-branch).
6. Create a pull request to the main repository.

## License
This project is open-source and available under the MIT License.
