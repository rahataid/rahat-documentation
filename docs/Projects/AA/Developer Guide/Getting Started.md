# Getting Started

## Prerequisites

Before setting up this project, you must first set up the following services and dependencies:

1. **[Rahat Platform Core](https://github.com/rahataid/rahat-platform)**: Core platform service. Follow the setup instructions in its repository.
2. **[Rahat-Triggers](https://github.com/rahataid/rahat-project-triggers)**: Event triggers service. Follow the setup instructions in its repository.
3. **[Stellar Disbursement Platform](https://github.com/stellar/stellar-disbursement-platform-backend)**: Required for disbursing Stellar tokens. Follow the setup instructions in its repository.
4. **Postgres Database**: Used for data storage. Ensure you have a running Postgres instance.
5. **Node.js**: Required to run the application.
6. **Redis Server**: Used for caching and message brokering. Ensure you have a running Redis instance.

---

## Environment Configuration

### Redis
- `REDIS_HOST`: Host address for Redis server.  
- `REDIS_PORT`: Port number for Redis server.  
- `REDIS_PASSWORD`: Password for Redis server.

### Postgres
- `DB_HOST`: Host address for Postgres database.  
- `DB_PORT`: Port number for Postgres database.  
- `DB_USERNAME`: Username for Postgres database.  
- `DB_PASSWORD`: Password for Postgres database.  
- `DB_NAME`: Database name for Rahat AA.  
- `DB_RAHAT_CORE`: Database name for Rahat Platform Core.  
- `DB_RAHAT_TRIGGERS`: Database name for Rahat Triggers.

### Prisma Database Connection
- `DATABASE_URL`: Connection string for the main database.  
- `CORE_DATABASE_URL`: Connection string for the core database.  
- `TRIGGER_DATABASE_URL`: Connection string for the triggers database.

### Project Settings
- `ACTIVE_YEAR`: The active year for the project.  
- `RIVER_BASIN`: The river basin in use.

### Communication (Optional, for comms integration)
- `COMMUNICATION_URL`: URL for the communication service.  
- `COMMUNICATION_APP_ID`: App ID for the communication service.

### Blockchain/Chain Variables (Optional, for chain integration)
- `NETWORK_PROVIDER`: Network provider URL.  
- `CHAIN_NAME`: Name of the blockchain network.  
- `CHAIN_ID`: Chain ID.  
- `CURRENCY_NAME`: Name of the currency.  
- `CURRENCY_SYMBOL`: Symbol of the currency.

### Keys (Optional, for chain integration)
- `DEPLOYER_PRIVATE_KEY`: Private key for the deployer.  
- `RAHAT_ADMIN_PRIVATE_KEY`: Private key for the Rahat admin.

### Stellar Disbursement Platform (SDP)
- `SDP_VERIFICATION_PIN`: Verification PIN for SDP.  
- `BASE_URL`: Base API URL for SDP.  
- `ADMIN_BASE_URL`: Admin API URL for SDP.  
- `RECERIVER_BASE_URL`: Anchor/Receiver API URL for SDP.  
- `FRIEND_BOT_STELLAR`: URL for Stellar Friendbot (testnet funding).  
- `STELLAR_DEMO_WALLET`: URL for Stellar demo wallet server.  
- `HORIZON_URL`: URL for Stellar Horizon server.  
- `ASSET_CREATOR`: Public key of the asset creator (to be filled as needed).

> **Note:** Commented variables are optional and can be enabled as per your integration needs.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
````

2. **Navigate to the project directory**:

   ```bash
   cd rahat-project-aa
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```

4. **Copy the project-specific schema to `schema.prisma` and run the migration**:

   ```bash
   npx prisma migrate dev
   ```

5. **Start the project**:

   ```bash
   pnpm serve:aa
   ```
