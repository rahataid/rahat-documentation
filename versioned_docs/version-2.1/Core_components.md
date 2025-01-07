---
id: core_components
---

## Core Components

The [Rahat Platform](https://github.com/rahataid/rahat-platform) repository is organized into several key components that enable modular development, shared functionality, and streamlined operations. Below is a description of its core components and their purposes:

### **1. Applications (`apps/`)**
This directory contains the primary applications within the Rahat Platform, each with its own dedicated configuration and source code. These applications represent distinct functionalities and services of the platform, such as:  
- **Beneficiary Management Services**: Microservice that handles operations like beneficiary registration, updates, and management, including relevant services, controllers, and modules.
- **Rahat**: Raht Core Services that handles rahat users and act as the gateway to all other projects running as micrservices, 
---

### **2. Libraries (`libs/`)**
Shared libraries are stored here to ensure reusability and consistency across the platform. These libraries include:
- **SDK**: Provides a unified interface for interacting with the platform's services and APIs.
- **extensions**: Contains extensions for the core services like dtos, exception handlers.
- **Blockchain Interaction Modules**: Facilitate operations like token transfers, contract interactions, and wallet management.  

---

### **3. Prisma (`prisma/`)**
This directory is critical for database management and includes:  
- **Schema Definitions**: Manage the data models for the platform's PostgreSQL database.  
- **Migrations**: Tracks and applies database changes, ensuring consistent schema evolution across environments.  
Prisma simplifies database operations and ensures robust data handling.

---

### **4. Tools (`tools/`)**
The `tools/` directory includes scripts and configurations to facilitate development and deployment processes. Examples include:  
- **Utility Scripts**:  
  - `setupDevTools.sh`: Automates the setup of essential development tools.  
  - `bootstrap.sh`: Initializes the development environment.  
- **Environment Reset**:  
  - `reset.sh`: Clears and resets the development environment for fresh starts.  
---

### **5. Docker Configurations**
The repository leverages Docker Compose to set up and manage various services during development. Key directories include:  
- **`docker-compose/`**: Contains configurations to spin up environments for the platform’s components.  
- **`graph/`**: Includes Docker Compose files for setting up The Graph services used to cache and query blockchain data efficiently.  

---

### **6. Configuration Files**
The repository includes configuration files to enforce development standards and enhance productivity:  
- **Linting and Formatting**: ESLint and Prettier configurations (`.eslintrc.json`, `.prettierrc`) ensure consistent coding standards.  
- **Testing**: Jest configuration (`jest.config.ts`) provides a robust testing framework.  
- **TypeScript Configurations**: Shared TypeScript settings (`tsconfig.base.json`) streamline development across applications.

---

### **7. Documentation**
Documentation plays a pivotal role in fostering collaboration and onboarding new developers:  
- **Guidelines**:  
  - `README.md`: Explains the repository's purpose, setup instructions, and architecture.  
  - `CONTRIBUTING.md`: Details the contribution process, ensuring consistency in contributions.  
- **Example Configurations**:  
  - `.env.example`: Serves as a template for setting environment variables.

