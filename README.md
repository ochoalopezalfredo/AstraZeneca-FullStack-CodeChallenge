# PlaceKeanu Image Retrieval Web App

This web application allows users to retrieve images from [PlaceKeanu](https://placekeanu.com/) based on their preferred dimensions, grayscale option, and whether they want a young Keanu Reeves.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
    - [Docker](#docker)
    - [NodeJS](#nodejs)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
    - [Backend](#backend)
    - [Frontend](#frontend)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://www.docker.com/) installed on your system.
- [Docker Compose](https://docs.docker.com/compose/) installed on your system
- [NodeJS](https://nodejs.org/en) installed on your system.
- Ensure that port 3000 and port 4000 on your machine are not in use.
## Getting Started

To get the project up and running, follow these steps:

### Docker
Just run 

    `docker-compose up`

or

    `docker-compose up -d`

if you want release the CLI and hide the servers logs 
### NodeJS
    - Rename the root file `file.env.local` to `.env.local`
    - on the CLI run 
        - `npm install`
        - `npm run backend`
    - on another CLI run
        - `npm run frontend`

        
## Usage
1. Open your web browser and go to http://localhost:3000 to access the PlaceKeanu image retrieval app.
2. Fill in the desired image dimensions, grayscale option, and select whether you want a young Keanu Reeves.
3. Click the "Generate imagen" button to retrieve and display the image based on your preferences.

## Folder Structure
### Backend
- Contains the Apollo Server backend code.
```
backend
├── Dockerfile          //Dockerize file
├── package.json        //Project Config
├── src
│   ├── index.ts        //Apollo server
│   ├── resolvers.ts    //Apollo resolvers
│   ├── schema.ts       //Apollo schema (queries)
│   └── types.ts        //Interfaces
└── tsconfig.json       //Typescript config
``````
- Contains the React frontend code.
```
frontend
├── Dockerfile          //Dockerize file
├── README.md           //This File
├── file.env.local      //Env file for local running
├── package.json        //Project Config
├── public              //Public assets
│   ├── favicon.ico     
│   ├── index.html      //Init index file
│   ├── manifest.json   //PWA config
│   └── robots.txt
├── src
│   ├── App.tsx         //Main Component
│   ├── components
│   │   └── image.tsx   //Image component
│   ├── graphql         
│   │   ├── client.ts   //Apollo client
│   │   └── queries.ts  //Queries
│   ├── index.css       //Root styles
│   ├── index.tsx       //Bootstrap component
│   ├── redux           //Redux/Sagas config files
│   │   ├── actions.ts
│   │   ├── reducers.ts
│   │   ├── sagas.ts
│   │   └── store.ts
│   └── types.ts        //Interfaces
└── tsconfig.json       //Typescript config
```

## License
This project is licensed under the MIT License