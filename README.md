# **Frontend Technology Guide**

## **Overview**

This document provides a comprehensive guide to the frontend code for our application. It covers architecture, technologies used, dependencies, prerequisites, system requirements, installation steps, configuration parameters, environment setup, external service integration, deployment process, version history, and known issues and limitations.

# Link to backend and chrome extension
1. [Backend](https://github.com/kellyhp/alumni-backend)
2. [Extension](https://github.com/edjohn/alumni-webtools)

## **Architecture**

Our frontend application is built with Next.js and is organized into the following key components:

- **Pages Folder**: Contains all the page components wrapped within the (pages) folder. Each folder corresponds to a different page and contains an individual page.jsx file.
- **Layout Component**: Located under the (pages) folder, it includes a navbar and children components to maintain a consistent layout across different pages.
- **Components Folder**: Contains all reusable components, divided into \_components for general components and \_globals for global styles such as fonts and colors.

## **Technologies Used**

- **Next.js**: A React framework for server-side rendering and generating static websites. It provides features like client and server components, data fetching, and code optimization.
- **React Testing Library**: A lightweight solution for testing React components, focusing on how users interact with them.
- **Jest**: A JavaScript testing framework used alongside React Testing Library for running tests.
- **Babel**: A JavaScript compiler that allows using the latest JavaScript syntax and ensures compatibility across different environments.
- **Sass**: A preprocessor scripting language that is interpreted or compiled into CSS, used for styling the application.
- **React-Switch**: A component library for creating switch inputs.
- **Chart.js**: A library for creating interactive charts.
- **React-CSS**: A library for styling React components.
- **React-Csv**: A library for handling CSV file download functionality.

## **Prerequisites**

- Node.js (v16.x or later)
- npm (v7.x or later)

## **System Requirements**

- A machine with at least 4GB RAM.
- An active internet connection for fetching dependencies and external integrations.

## **Installation Steps**

**Clone the repository**:

```git clone https://github.com/kellyhp/alumni-frontend>](https://github.com/kellyhp/alumni-frontend```

**Install dependencies**:

```npm run install```

**Set up environment variables**: Create a .env.local file in the root directory and add the necessary environment variables as described in the Configuration Parameters section.

**Run the development server**:

```npm run dev```

## **Configuration Parameters**

The .env.local file should contain the following configuration parameters:
```
NEXT_PUBLIC_API_URL=<https://api.example.com> NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```
## **Environment Setup**

1. **Node.js and npm**: Ensure Node.js and npm are installed.
2. **Next.js Configuration**: Configure Next.js to use the environment variables defined in .env.local.

## **External Service Integration**

- **Analytics**: Integration with analytics services using NEXT_PUBLIC_ANALYTICS_ID.
- **API**: Fetch data from external APIs using NEXT_PUBLIC_API_URL.

## **Deployment Process**

**Build the application**:

```npm run build```

**Deploy to a server**: Copy the files to your server or deploy using a platform like Vercel, Netlify, Render, or AWS. But for this case, this will deployed on the UC Davis server.

**Start the application**:

```npm run start```

## **Version History**

- **v1.0.0**: Initial release with basic page layouts, routing, and component structure.

## **Known Issues and Limitations**

- **Data Fetching**: Ensure the API endpoints are available and correctly configured.
- **Styling Issues**: Ensure consistent styling across different browsers by using autoprefixer.