---
id: aa_project
---

# AA Project

The anticipatory action tool is a comprehensive solution designed to manage anticipatory action (AA) projects effectively. It encompasses various functionalities to address key aspects of project management, ensuring smooth execution and optimal outcomes.

One of its primary features is activity management, which allows users to efficiently plan, organize, and track AA project activities. This feature provides tools for scheduling tasks, allocating resources, and monitoring progress to ensure that activities are completed on time and within budget.
Another essential aspect of the system is the ability to establish trigger modules. Users can set up predefined trigger statements within the system to identify potential hazards or crises and link them with the forecasting data sources. These trigger modules utilize indicators to detect early warning signs, enabling timely responses and effective risk mitigation strategies. Additionally, the system offers a forecasting data view feature that aggregates information from multiple sources such as the Department of Hydrology and Meteorology (DHM), National Center for Weather and River Monitoring (NCWRM), Global Flood Awareness System (GLOFAS), and others. This comprehensive approach ensures that users have access to diverse and reliable data sets, enhancing the accuracy and reliability of the early warning system.
The system also includes communication modules that facilitate seamless collaboration and information sharing among stakeholders and beneficiaries involved in AA projects. It provides channels for effective communication, ensuring that relevant parties are informed and coordinated throughout the project lifecycle.

Additionally, the tool enables the management and distribution of cash or in-kind assistance to beneficiaries. It streamlines processes related to beneficiary identification, eligibility assessment, and assistance delivery, ensuring that aid reaches those in need efficiently.
Furthermore, the system offers real-time monitoring and reporting capabilities, providing stakeholders with transparent oversight of project operations. Users can track project activities, expenditures, and outcomes, promoting accountability and informed decision-making.

## Features

The AA project tool offers a range of features to support effective project management and implementation. Key features include:

- Role-Based User Management
- Manage Data Sources
- Manage Trigger Thresholds
- Activity Management
- AA Fund/Budget Management
- Communication Management
- Distribution Management
- Import Beneficiary from Community Tool
- Beneficiary Targeting
- Grouping Beneficiaries
- Reporting

## Core Components

### Backend Services

### NestJS Application

The main backend service is built using NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

### Microservices

The project follows a microservices architecture to ensure modularity, scalability, and maintainability.

## Database

### Postgres

Used as the primary relational database for storing application data.

### Prisma

An ORM (Object-Relational Mapping) tool used with Postgres for database migrations and schema management.

## Caching and Message Brokering

### Redis

Utilized for caching and message brokering to improve performance and manage real-time data communication.

## Blockchain Integration

### Smart Contracts

The project includes smart contracts written in Solidity and managed using the Hardhat framework. These contracts handle various aspects of fund distribution and management.

### Scripts and Tests

Scripts for deploying and interacting with smart contracts, along with tests to ensure their functionality and reliability.

## Directory Structure

### Root Directory

- **Dockerfile.aa**: Docker configuration for building and running the application.
- **README.md**: Documentation file providing basic instructions and setup.
- **package.json**: Project metadata and dependencies.
- **tsconfig.base.json**: TypeScript configuration for the project.
- Various configuration and data files (**nx.json**, **pnpm-lock.yaml**, etc.).

### Apps Directory (apps/contracts)

- Contains smart contract code, tests, and deployment scripts.
- **hardhat.config.js**: Configuration for Hardhat, a development environment for Ethereum software.
- **tests/**: Directory containing test files for the smart contracts.
- **scripts/**: Directory with scripts for deploying and managing smart contracts.

### Tools Directory (tools/project-scripts)

- Contains various utility scripts for managing the project.
- Scripts for seeding data, managing contracts, and handling blockchain-related tasks.
- TypeScript type definitions for blockchain interactions.

### Usage Examples

### Setup Instructions

### 1. Cloning the Repository and Installing Dependencies

```bash
git clone <repository_url>
cd <project_directory>
pnpm install
```

### 2. Setting Up Environment Variables

Create a .env file in the root directory based on the .env.sample file provided in the project. Fill in the necessary details, such as database connection strings, Redis settings, and other configurations.

```env

### Sample .env

PROJECT_ID=45606343-e6f5-475f-a2b3-f31d6ab10733

# Redis
REDIS_HOST=localhost
REDIS_PORT=6666
REDIS_PASSWORD=rahat123

# Postgres environment variables
DB_HOST=localhost
DB_PORT=5555
DB_USERNAME=rahat
DB_PASSWORD=rahat123
DB_NAME=rahat-aa
DB_RAHAT_CORE=rahat-platform

# Prisma database connection
DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public
CORE_DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_RAHAT_CORE}?schema=public

# comms
COMMUNICATION_URL=http://localhost:5200/v1
COMMUNICATION_APP_ID=d99cc532-65e1-4eca-bcbc-a4d5ecb83cf3

# chain variables
NETWORK_PROVIDER=http://127.0.0.1:8888
CHAIN_NAME='localhost'
CHAIN_ID=8888
CURRENCY_NAME='ETH'
CURRENCY_SYMBOL='ETH'

# keys
DEPLOYER_PRIVATE_KEY=0x2mkjasd719dc5fas890be569d4eda4068a6fc307ff74147eb12b2f5fab
RAHAT_ADMIN_PRIVATE_KEY=0x2mkjasd719dc5fas890be569d4eda4068a6fc307ff74147eb12b2f5fab

```

### 3. Running Database Migrations

npx prisma migrate dev

### 4. Running the Project

pnpm start

## Key Features

### Anticipatory Action

- Proactively distributes funds based on flood predictions, ensuring timely assistance.
- Sends early warning communications to at-risk populations.

### Blockchain Security

- Utilizes blockchain technology to ensure secure and transparent transactions.
- Smart contracts manage fund distribution, reducing the risk of fraud and ensuring accountability.

### Scalable Architecture

- Built with a microservices architecture to allow for scalability and independent development of components.
- Uses NestJS for its robust modular architecture, making it easy to extend and maintain.

### Efficient Data Management

- Employs Postgres and Prisma for reliable data storage and management.
- Redis is used for caching and real-time data processing, enhancing performance.

## Module Details

Based on the module files in the project, here are the key features categorized by each module:

### 1. DataSource Module

- **File**: `datasource.module.ts`
- **Features**:
  - **Data Source Management**:
    - Handles connections and interactions with various data sources.
    - Manages data retrieval and storage operations.

### 2. Activity Categories Module

- **File**: `activity-categories.module.ts`
- **Features**:
  - **Activity Category Management**:
    - Defines and manages different categories of activities.
    - Provides APIs for CRUD operations on activity categories.

### 3. App Module

- **File**: `app.module.ts`
- **Features**:
  - **Core Application Setup**:
    - Central configuration module for the NestJS application.
    - Imports and integrates other modules.
    - Configures global services, middleware, and providers.

### 4. Triggers Module

- **File**: `triggers.module.ts`
- **Features**:
  - **Trigger Management**:
    - Defines and manages triggers for anticipatory actions.
    - Handles creation, activation, and monitoring of triggers.

### 5. Processors Module

- **File**: `processors.module.ts`
- **Features**:
  - **Data Processing**:
    - Contains logic for processing data related to anticipatory actions.
    - Handles complex data transformations and business logic.

### 6. Stakeholders Module

- **File**: `stakeholders.module.ts`
- **Features**:
  - **Stakeholder Management**:
    - Manages information about stakeholders involved in the project.
    - Provides APIs for CRUD operations on stakeholder data.

### 7. Daily Monitoring Module

- **File**: `daily-monitoring.module.ts`
- **Features**:
  - **Daily Monitoring**:
    - Manages daily monitoring activities and data collection.
    - Provides tools and APIs for tracking daily metrics and events.

### 8. Activities Module

- **File**: `activities.module.ts`
- **Features**:
  - **Activity Management**:
    - Manages activities related to anticipatory actions.
    - Provides APIs for creating, updating, and tracking activities.

### 9. Beneficiary Module

- **File**: `beneficiary.module.ts`
- **Features**:
  - **Beneficiary Management**:
    - Manages data related to beneficiaries receiving aid.
    - Provides APIs for CRUD operations on beneficiary data.

### 10. Phases Module

- **File**: `phases.module.ts`
- **Features**:
  - **Phases Management**:
    - Manages different phases of the anticipatory action projects.
    - Defines workflows and transitions between phases.

### 11. Listeners Module

- **File**: `listeners.module.ts`
- **Features**:
  - **Event Listeners**:
    - Defines and manages event listeners for various actions.
    - Handles asynchronous events and triggers corresponding actions.

### 12. Stats Module

- **File**: `stats.module.ts`
- **Features**:
  - **Statistics and Reporting**:
    - Collects and processes statistical data.
    - Provides tools and APIs for generating reports and visualizations.

These modules collectively define the core functionalities and features of the Rahat AA project, ensuring a modular and scalable architecture. Each module focuses on a specific aspect of the project, contributing to its overall functionality and efficiency.
