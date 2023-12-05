# RequestRegistry Contract

## Overview
`RequestRegistry` is a Solidity smart contract designed to manage funding requests and allocations within a system that integrates with the Hats protocol. It allows for the creation and management of requests, each tied to a specific funding source or "ship".

## Features
- Interaction with the Hats protocol for access control.
- Management of funding requests and allocations.
- Tracking and changing the status of requests.
- Ensuring spending limits within defined thresholds.

## Contract Structure

### Enums and Structs
- `Status`: Enum representing the state of a request (Pending, Rejected, Approved, Distributed).
- `Metadata`: Struct for metadata associated with requests and ships, supporting various types like IPFS, URL, JSON, and Arweave.
- `Request`: Struct representing a funding request, including amount, status, and metadata.
- `Ship`: Struct representing a funding source or allocation unit.

### State Variables
- `IHats hats`: Interface instance for the Hats protocol.
- `uint256 facilitatorHatId`: ID for tracking facilitators.
- `uint256 nonce`: Incremental ID for requests.
- `mapping(uint256 => Request) requests`: Mapping of nonce to request details.
- `mapping(uint256 => Ship) ships`: Mapping of ship ID to ship details.

### Custom Errors
- `NotAuthorized`
- `ShipDoesNotExist`
- `SpendingCapExceeded`

### Events
- `RequestCreated`
- `ShipDeployed`
- `RequestStatusChanged`
- `GrantShipsDeployed`

### Constructor
Initializes the contract with the Hats protocol, sets the facilitator hat ID, and deploys ships based on provided data.

### Functions
- `createRequest`: Creates a new funding request.
- `changeRequestStatus`: Changes the status of a request.
- `getShip`: Fetches details of a specific ship.
- `getFundingAvailable`: Calculates and returns the remaining funds for a ship.

## Security and Access Control
The contract uses the Hats protocol for role-based access control, ensuring that only authorized users can perform specific actions such as creating requests or changing their statuses.

## Spending Limitations
Implements checks to prevent requests from exceeding the total distribution amount of a ship.

## Event Logging
All critical state changes in the contract emit events for transparency and auditability.



