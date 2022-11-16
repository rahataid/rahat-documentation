---
id: installation_guide
---

# Installing Rahat

This documentation is broken up into three section. The first section describes the steps to setup base repositories and directory structure required. The second section describes the steps to run Rahat using container environment(docker) and the third section describes the steps to run Rahat natively using node.js

### Setup project repositories
The following command creates a directory named 'esatya-rahat' and automatically setups required repositories inside that directory. You can simply paste the following command in your unix based terminal.

```
bash <(wget -qO- https://raw.githubusercontent.com/esatya/rahat/stage/scripts/setup-rahat-projects.sh) -b stage
```

The above command clones the repositories from the `stage` branch which contains the latest features of Rahat. If you want to install Rahat from branches other than `stage`, use a different branch name after the `-b` flag. Example: `-b master` 

> Note: Windows user may use [Ubuntu WSL](https://ubuntu.com/wsl) to run the above script or clone individual repository manually and manually rename the example configuration files and env files and create the following directory structure.

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

### Running with docker