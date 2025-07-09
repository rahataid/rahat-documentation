## C2C Project Dashboard

![C2C Project Dashboard](https://assets.rumsan.net/rahat/c2c-dashboard-2.png)

Within each project, the **Project Dashboard** provides a quick overview of key details and progress.

The left navigation menu includes:

- **Dashboard**
- **Beneficiaries**
- **Transactions**
- **Fund Management**
- **Communications**
- **Grievance**
- **Disbursement**
- **Deposit Token**
- **Edit Project**

These sections help manage beneficiaries, funds, communications, and token disbursements.

The main dashboard displays project info, charts on gender and age distribution, recent transactions, and disbursement methods.

# 🛠️ Project Setup

Before you can begin sending **USDC (crypto aid)** to your beneficiaries, the project needs to be properly configured. This involves selecting the blockchain network and setting up your **treasury** (where your funds are stored).

## 🔶 Step 1: Choose the Blockchain Network

Each project must run on a blockchain. **Rahat supports EVM-based networks** such as:

- Ethereum  
- Polygon  
- Celo  

This defines where your smart contracts live and where funds will be sent from.

## 🔐 Step 2: Set Up Gnosis Safe Wallet (If Using Multisig)

If your project uses **multi-signature approval** for fund disbursement (**highly recommended for accountability**), you will need a **Gnosis Safe wallet**.

A Gnosis Safe wallet requires multiple people (signers) to approve each transaction before funds are sent.  
**Example**: 2 out of 3 people must approve before the system sends USDC.

> ⚙️ This setup is done from the backend by the technical team.

📎 [Click here to see how to configure Gnosis Safe wallet](#) _(link to be provided by Devs)_

# 💸 Disbursing USDC to Beneficiaries

Once your project is set up and beneficiaries are ready, you can start **disbursing aid**.

## ✅ Pre-Disbursement Checklist

Make sure:

- All intended beneficiaries are **imported into the system**.
- If disbursing in bulk, beneficiaries are **grouped properly** (e.g., by location or batch).
- **Project setup is complete**, including the **treasury source** and **wallet address verification**.

## 🎯 How to Disburse USDC

### 🔹 For Individual Disbursement:

1. Go to the **Beneficiaries** section from the sidebar.
2. Select the **specific beneficiary** you want to send funds to.
3. Click **Disburse**.

SCREENSHOT HERE

### 🔹 You will now see 3 Treasury Source Options:

Each option is simply a way to send money. Choose one based on where the funds are coming from.

![Treasury Source Options](https://assets.rumsan.net/rahat/treasury-source.png)

## 🔢 Treasury Source Options

Choose one of the following based on where the funds are coming from:

### 1. 🧮 Project Balance

- Funds are held in a **project-specific smart contract**.
- This contract must already be **funded with USDC**.
- When selected, USDC is sent **directly to the beneficiary** from the smart contract.

📎 [See how to fund your project contract](#)

### 2. 👛 User Wallet

- This option sends USDC directly from your **connected wallet** (like MetaMask).
- You must have **USDC in your wallet**.
- You will be asked to **connect your wallet** before proceeding.

### 3. 🛡️ Multisig Wallet (Gnosis Safe)

- Ideal for teams that want **extra security and transparency**.
- The disbursement must be **approved by multiple people** before it goes through.
- Funds are stored in a **Gnosis Safe**.

📎 [See full guide on multisig disbursement](#)

---

## 🔐 Disbursement via Multisig – Detailed Steps

### 1. After selecting **Multisig Wallet** as your treasury source:

a. **Input the amount of USDC** you want to send per beneficiary.

![Disbursement via Multisig - Step 1](https://assets.rumsan.net/rahat/disburesemnt-1.png)

b. The platform will **create a transaction request** and send it to the **Gnosis Safe dashboard**.

![Disbursement via Multisig - Step 2](https://assets.rumsan.net/rahat/disbursement-2.png)

### 2. The **Gnosis Safe signers will receive a notification** in the **Safe Wallet Dashboard**.

![Gnosis Safe Wallet Dashboard](https://assets.rumsan.net/rahat/wallet-dashboard.png)

### 3. Once the required number of signers approve it (e.g., 2 out of 4), the transaction becomes ready.

![Screenshot - June 11, 2025 at 4:37 PM](https://assets.rumsan.net/rahat/screenshot-2025-06-11-at-4.37.26-pm.png)

### 4. **Execute the Transaction:**  

a. Go to **Disbursement section** → Click on the **transaction details**.

![Screenshot - June 11, 2025 at 4:37 PM](https://assets.rumsan.net/rahat/screenshot-2025-06-11-at-4.37.26-pm.png)

b. Click the **Execute** button.

Screenshot

c. The system will now automatically send the USDC to each beneficiary’s wallet.

d. Beneficiary will receive Message in their Mobile Number about the disbursement and how to use the money. 

Screenshot

**⚠️ Disclaimer:** _The link will be different for every project._

---

## 🔄 Offramping via Rahat Offramping Service

If a beneficiary wishes to **convert their received USDC into mobile money**, they can use the **Rahat Offramping Service**.

---

### 📩 How to Start Offramping

- Beneficiaries will receive an **email or SMS** with a link to start the offramping process.
- The message may look like this:  
  
  SCREENSHOT
  
- By clicking on the link, beneficiaries are taken to the **Rahat Offramping Portal**:  

![Crypto Offramp](https://assets.rumsan.net/rahat/crypto-offramp.png)

## 📘 Want to Learn More?

If you want to understand how beneficiaries can **offramp USDC**, including the steps and flow, click the link below:

🔗 **[How Offramping Works for Beneficiaries](#)**

## 📊 Tracking Offramping Transactions (for Admins)

All offramping activities done through the **Rahat Offramping Service** are **logged and trackable** by the admin team.

To view these transactions:

1. **Log in** to the Rahat Dashboard.
2. Go to the **C2C Project Dashboard**.
3. Navigate to the **Transactions** section.
4. Click on the **Offramping Transaction** tab.

You will be able to view:

- Beneficiary name  
- Amount offramped  
- Fiat received  
- Chain  
- Status  
- Timestamp



