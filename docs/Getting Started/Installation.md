---
id: installation
---

Here’s a structured **Developer-Friendly Installation Documentation** outline for Rahat:


### Automatic Setup:
- Prod:
    ```sh
    curl -fsSL https://raw.githubusercontent.com/rahataid/Rahat-Setup/refs/heads/main/setup.sh | bash
    ```

- Dev:
    ```sh
    curl -fsSL https://raw.githubusercontent.com/rahataid/Rahat-Setup/refs/heads/main/setup.sh | bash -s dev
    ```


### Manually
- Clone Rahat Setup Repo:
    ```sh
    git clone https://github.com/rahataid/Rahat-Setup.git
    ```

## Prerequisites Tools:
- Docker.

## Core Repositories:
- There are two core Repositories:
    - Rahat UI: [https://github.com/rahataid/rahat-ui](https://github.com/rahataid/rahat-ui/)
        - Rahat UI contains two projects, but we will setup rahat-ui only for now.

    - Rahat Platform: [https://github.com/rahataid/rahat-platform](https://github.com/rahataid/rahat-platform)
        - Rahat Platform contains two projects:
            - rahat
            - beneficiary


- There are many projects as microservices like aa, rp and so on. 

## Setup Current Directory:
```sh
export CWD=${PWD}
```

## Clone Repositories:
- Command:
    ```sh
    git clone https://github.com/rahataid/rahat-platform.git && cd rahat-platform && git checkout dev && pnpm install && pnpx prisma generate && cd $CWD
    git clone https://github.com/rahataid/rahat-ui.git && cd rahat-ui && git checkout dev && pnpm install && cd $CWD
    ```

## Setup Local Development:
- Command: 
    ```sh
    cd docker 
    cp .env.platform.example .env.platform
    cp .env.rahat-ui.example .env.rahat-ui
    cd $CWD
    ```

- Setup `.env.platform` and `.env.rahat-ui` according to your needs.
- Once `.env.platform` is setup, copy it into `rahat-platform`.
    ```sh
    cp docker/.env.platform rahat-platform/.env
    ```
- Start Application:
    ```sh
    cd docker
    docker compose -f docker-compose-local.yaml up -d --build
    ```

- Run Prisma Migration:
    ```sh
    cd $CWD
    cd rahat-platform
    pnpx prisma migrate dev --skip-seed
    cd $CWD
    cd docker
    docker compose -f docker-compose-local.yaml restart
    ```

---

# **Table of Contents**  

1. **Introduction**  
   - Overview of Rahat  
   - Key Features  
   - Installation Methods  

2. **Prerequisites**  
   - System Requirements  
   - Required Software  
   - Environment Variables  

3. **Method 1: Docker Installation** 
   3.1 Setting Up Docker
      - Create a gist with shell scripts
      - Shell scripts should have functions to create random passwords (eg for postgres), ports, etc whenever possible
      - create env files (by copying from example) with newly generated password, ports and any env you get from user
      - Get the docker compose file from rahat-platform
      - Start dockers
   3.2 Configuring Environment Variables
      - Ask from user though CLI 
   3.3 Running Rahat with Docker  
   3.4 Deploying Smart Contracts  
   3.5 Accessing Rahat Services  

5. **Method 2: Manual Installation (From Source)**  
   4.1 Cloning the Repository  
   4.2 Installing Dependencies  
   4.3 Configuring Environment Variables  
   4.4 Building and Running Rahat  
   4.5 Deploying Smart Contracts  

6. **Post-Installation Configuration**  
   - Setting Up Admin Accounts  
   - Connecting to Blockchain Networks  
   - Managing API Keys  

7. **Testing and Development**  
   - Running Unit Tests  
   - Debugging Common Issues  
   - Using Mock Data for Testing  

8. **Deployment and Production Setup**  
   - Security Best Practices  
   - Scaling Rahat Services  
   - Monitoring and Logging  

9. **Troubleshooting**  
   - Common Errors and Fixes  
   - Logs and Debugging Tips  
   - Where to Get Support  

10. **Contributing to Rahat**  
   - Code Contribution Guidelines  
   - Reporting Issues  
   - Feature Requests  

---
