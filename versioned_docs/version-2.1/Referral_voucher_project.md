---
id: referral_voucher_project
---

# Referral Voucher Project

## Overview

Referral Project provides Voucher Redemption support to affiliated vendors during the voucher distribution and referral management projects Instead of traditional in-kind aid, such as distributing physical vouchers, the Referral Voucher system gives beneficiaries the flexibility to redeem and refer into the project.

### Prerequisites

Before you begin, go to the rahat-core repo and run the [rahat-core](https://github.com/rahataid/rahat-platform-nx) project. This project is dependent on the rahat-core project.

Also ensure your system has the following dependencies installed:

- Docker: Version 20.10.7 or higher
- Node.js: Version 20.10.0 or higher
- pnpm (Package Manager): Version 6.16.1 or higher

## Run locally

Step1: Clone project

```bash
git clone git@github.com:rahataid/rahat-platform-nx.git
```

Step2: Go to the project directory and bootstrap the project

```bash
pnpm bootstrap
```

Step3: Run the project

```bash
pnpm start
```

### Deployment Checklist

1. Deploy and verify contracts in public chain from local machine
2. Deploy subgraph for the deployed contract
3. Update .env file of Rahat-Core(rahat-platform-nx)

   - Update blockchain network details
   - Update communication message sender API
   - Update ERC2771Frowarder contract address and Rahat Admin Private Key
   - Update subgraph URL

4. Run seed script in Rahat-Core to create the users, roles and permissions and update the settings
   - Settings should include CHAIN_SETTINGS and SUBGRPAH_URL
5. Create a project in Rahat-Core and get the Project-Id
6. Update .env file of Rahat-Project-El
   - Update blockchain network details
   - Update Rahat-Admin-Private-Key
   - Update Project-Id
7. Run production seed script in Rahat-Project-El to create the project and update the settings
   - Settings should include CONTRACT, BLOCKCHAIN and SUBGRPAH_URL
8. Update the .env in rahat-ui frontend
   - Update the API_URL
   - Update the Communication API and application Id
   - Update chain-settings and subgraph-url

### Deployment of Subgraph

<li>
Update the contract addresses in the network.json file, following the specified format in the file.
</li>
<li>Authorize the graph using the authorization key available in your Subgraph Studio account.
</li>

```bash
    graph auth --studio <Authorization_key>
```

<li>Deploy the graph
</li>

```bash
graph deploy --studio <subgraph_slug_name>
```

#### For further information follow [graph documentation](https://thegraph.com/docs/en/quick-start/#5-deploy-to-subgraph-studio)

### About Graph Sdk

Sdk for graph query is designed for referral project
You need to install graph sdk in rahat-ui for graph query

```bash
pnpm install @rahataid/el-subgraph
```

You need to import graph query from the sdk you imported

```bash
import { GraphQuery } from '@rahataid/el-subgraph';
```

You need to create the sub graph provider

```bash
    <GraphContext.Provider
      value={{
        queryService: new GraphQuery(
          <SUBGRAPH_API>,
        ),
      }}
    >
      {children}
    </GraphContext.Provider>
```

You need to wrap the above created provider in your project layout

You can call the function from GraphQuery Within your project

```bash
  const { queryService } = useGraphService();
```

You can access required function

```bash
queryService.useProjectTransaction()
```
