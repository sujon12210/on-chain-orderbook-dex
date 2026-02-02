# On-Chain Orderbook DEX

This repository contains an expert-level smart contract system for a decentralized orderbook exchange. It allows users to place limit orders and enables takers to fill those orders, facilitating professional trading mechanics directly on the blockchain.

### Trading Workflow
1.  **Deposit:** Users deposit ERC-20 tokens into the exchange contract.
2.  **Make Order:** A "Maker" creates an order specifying the token pair, amount, and price.
3.  **Fill Order:** A "Taker" matches the order, triggering an atomic swap.
4.  **Cancel Order:** Makers can revoke unfilled orders at any time.



### Technical Highlights
* **Atomic Settlements:** No counterparty risk; trades execute only if both sides have funds.
* **Mapping-Based Storage:** Optimized for gas efficiency when tracking user balances and order status.
* **Security:** Built-in protection against unauthorized cancellations.
