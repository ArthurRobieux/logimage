## Available Scripts

In the project directory, you can run:

### Build container

`docker build -t logimage .`

### Run container

`docker run --rm -it -v /Users/arthur/Workspace/logimage/src:/app/src -p 3000:3000 logimage bash`

### Run app

`npm start`
