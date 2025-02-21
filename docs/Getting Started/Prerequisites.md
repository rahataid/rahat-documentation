---
id: prerequisites
---

# Prerequisites

Before you begin, ensure your system has the following dependencies installed:

Docker: Version 20.10.7 or higher
Node.js: Version 20.10.0 or higher
pnpm (Package Manager): Version 6.16.1 or higher

## Setting Up Development Environment

To set up the development environment for Rahat, we need the following services to br available on your local machine:
 - graph-node
 - postgres
 - redis
 - ganache

The best way to setup all of these services is thourgh docker. You can use the following [docker-compose file](https://github.com/rahataid/rahat-platform/tree/main/tools/docker-compose) to setup all the services.
