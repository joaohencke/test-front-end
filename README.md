# Front-End | SevenApps

Requirements:
  * Docker & Docker compose
  * NodeJS

To run project in production mode, open the terminal at root folder 
```bash
docker-compose up
```

It will download dependencies, generate build version and start the server at [3000](http//localhost:3000)

To run project in dev mode, you should install dependencies running at root folder 
```bash
yarn install
```

Then step into client folder and run `start`
```bash
cd packages/client
yarn start
```

This will start server at [3000](http//localhost:3000).

