---
id: installation_guide
---

# Installing Rahat

This documentation is broken up into three sections. The first section describes the steps to setup base repositories and directory structure required. The second section describes the steps to run Rahat natively using node.js and the third section describes the steps to run using container environment(docker).

### Setup project repositories
The following command creates a directory named 'esatya-rahat' and automatically setups required repositories inside that directory. You can simply paste the following command in your unix based terminal.

```
bash <(wget -qO- https://raw.githubusercontent.com/esatya/rahat/stage/scripts/setup-rahat-projects.sh) -b stage
```

The above command clones the repositories from the `stage` branch which contains the latest features of Rahat. If you want to install Rahat from branches other than `stage`, use a different branch name after the `-b` flag. Example: `-b master` 

> Note: Windows user may use [Ubuntu WSL](https://ubuntu.com/wsl) to run the above script or clone individual repository manually and manually rename the example configuration files and env files and create the following directory structure.

> Note: Linux and MacOS users, if you are cloning the individual repository manually, make sure to rename the provided sample configuration files and environment files according to the following directory structure.

#### Directory structure
```
  ├── rahat                    
  │   ├── config
  │		  ├── default.json
  │		  ├── contracts.json
  │		  ├── privateKey.json
  │		  ├── settings.json
  │
  │
  ├── rahat-agency
  │	  ├── .env
  │
  ├── rahat-vendor               
  │   ├── .env
  │
  ├── rahat-mobilizer
  │	  ├── .env
  │
  ├── docker-compose.yml    
  ├── docker-compose.dev.yml    
  ├── docker-compose.prod.yml    
  ├── docker-compose.test.yml    
  ├── docker-ci-test.sh    
```                

### Running natively

Required Node.js version: `14.xx.xx`

To run Rahat natively follow the following steps.

1. Rename the example configuration files and example environment files to according to the directory structure shown above. If you are using the setup script then it will be done automatically.
> You may change the configuration files and environment files according to your needs.

2. Go into individual repository and install the required packages using `yarn install` or `npm install`. You may inspect `package.json` file for more information on project dependencies.

3. Start the servers of individual repository using `yarn start` or `npm start` and the server will be started on the provided port number in configuration file or environment file.
 
Rahat server will run on: `localhost:3601`  
Rahat agency app will run on: `localhost:4601`  
Rahat vendor app will run on: `localhost:3300`  
Rahat mobilizer app will run on: `localhost:3307` 

### Running using docker
> You may change the configuration files and environment files according to your needs before running docker commands as well.

To run rahat projects using docker, follow the following steps:

#### Running development build

To run rahat projects for local development, follow the following steps:
1. Run the command below on the root directory of above mentioned project structure. This will build the required docker images of Rahat projects.
```
docker compose -f docker-compose.dev.yml build
```

2. Run the following command to start the Rahat development server using docker.
```
docker compose -f docker-compose.dev.yml up
```

For developement build, application will run on following ports:

Rahat server will run on: `localhost:3601`  
Rahat agency app will run on: `localhost:8000`  
Rahat mobilizer app will run on: `localhost:8001`   
Rahat vendor app will run on: `localhost:8002`  



#### Running production build
To run rahat projects in a prodcution environment, follow the following steps:

1. Run the command below to to start building production docker containers of Rahat applications.
```
docker compose -f docker-compose.prod.yml build
```

2. Run the following command to start the production build of Rahat applications.
```
docker compose -f docker-compose.prod.yml up
```

For production build, application will run on following ports:

Rahat server will run on: `localhost:3601`  
Rahat agency app will run on: `localhost:8000`  
Rahat mobilizer app will run on: `localhost:8001`   
Rahat vendor app will run on: `localhost:8002`  