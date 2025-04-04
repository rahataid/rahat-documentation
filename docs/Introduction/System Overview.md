---
id: system_overview
---

# System Overview

## How Rahat Works

Rahat simplifies digital relief distribution through:

- **Digital Wallets**: Beneficiaries receive digital wallets for secure transactions.  
- **Transparent Distribution**: Donors and humanitarian agencies can track fund utilization in real time.  
- **Decentralized Ledger**: Ensures that all transactions are tamper-proof and publicly verifiable.  
- **Agent-based System**: Local agents assist in cash-out and onboarding processes, ensuring last-mile connectivity.

---

# Rahat Techstack

This a list of all the technology services used to build and run Rahat projects.

![Rahat Technology Stack](https://i.imgur.com/mYx9eSP.png)

Here's a more detailed breakdown of the Rahat Technology Stack, based on your diagram:

## 1. Database & Caching

Efficient data storage and retrieval are crucial for Rahat’s performance and scalability.

- **PostgreSQL** – A relational database used for storing core application data, including user information, transaction records, and project details.  
- **Redis** – A high-performance, in-memory caching system used to improve query response times and reduce database load.  
- **Prisma** – An ORM (Object-Relational Mapper) that simplifies database interactions, ensuring type-safe queries and improved developer productivity.  

## 2. Backend - Server

The backend is structured using a microservices architecture, allowing different components to function independently for better scalability and maintainability.

- **Node.js & Nest.js**
  - *Node.js* serves as the backend runtime, ensuring high concurrency and efficient handling of requests.  
  - *Nest.js* (a progressive Node.js framework) provides a modular architecture with built-in dependency injection, making it ideal for scalable applications.  

- **Hardhat & Viem**
  - *Hardhat* is used for blockchain smart contract development, testing, and deployment, particularly for Ethereum-based environments.  
  - *Viem* is a modern Ethereum library that replaces Ethers.js for interacting with the blockchain.  

- **Bull / RabbitMQ**
  - These message queues help in handling asynchronous tasks, such as transaction processing, notifications, and background jobs, preventing system overload.  

- **Microservices**
  - The backend follows a microservices architecture, where different projects work as microservices.

## 3. Frontend

The frontend consists of both a web-based interface and a mobile application to provide a seamless user experience.

- **Next.js** – A React-based framework used to build the web interface.  
- **ShadCN** – A modern UI component library built on top of Tailwind CSS, used for building clean, reusable, and accessible UI elements.  
- **Viem** – Used on the frontend to interact with blockchain networks securely and efficiently.  
- **Zustand** – A fast and scalable state management library for React, used to manage global state in Rahat's frontend with a minimal and efficient API.  
- **Wallets** – Integrated support for different wallets like MetaMask and Coinbase to enable blockchain interactions.

## 4. Vendor - Mobile App

Vendors play a critical role in Rahat's ecosystem, accepting digital payments from beneficiaries.

- **Ionic** – A cross-platform mobile development framework allowing vendors to access Rahat’s services via mobile devices.  
- **Backup Services** – Services to back up the vendor's wallet; currently uses Google Drive for wallet backup.

## 5. Blockchain Integration

Rahat integrates multiple blockchain networks to facilitate financial access and transparency.

- **EVM (Ethereum Virtual Machine)** – Supports Ethereum-based smart contracts for fund distribution and transaction tracking.  
- **Stellar** – A blockchain network optimized for fast, low-cost transactions, particularly useful for humanitarian aid and financial inclusion.

## 6. External Services

Rahat leverages external services to extend its capabilities.

- **SMS/IVR**
  - Uses voice-based and SMS-based interactions, enabling communication with beneficiaries who may not have smartphones.

- **Subgraph**
  - Uses TheGraph to index blockchain data, making it easier to query and retrieve transaction details efficiently.

- **FSP (Financial Service Providers)**
  - Integrates with payment processors and banking services to facilitate off-chain transactions and cash-out options for users.

- **Offramps**
  - Allows users to convert blockchain tokens into fiat currency, making the system usable in real-world financial scenarios.
