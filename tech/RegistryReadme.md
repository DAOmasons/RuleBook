# RequestRegistry Contract

## Overview
`RequestRegistry` is a Solidity smart contract designed for managing funding requests and allocations within Grant Ships, integrated with the Hats protocol. It supports the creation, management, and status tracking of funding requests, each tied to a specific funding source or "ship".

## Features
- Integration with the Hats protocol for role-based access control.
- Comprehensive management of funding requests and allocations.
- Capability to track and modify the status of requests (including cancellation).
- Enforcement of spending limits within predefined thresholds.

## Contract Structure

### Enums and Structs
- `Status`: Enum representing the state of a request (Pending, Rejected, Approved, Distributed, Cancelled).
- `Metadata`: Struct containing metadata associated with requests and ships, includes a `metaType` (indicating the type like IPFS, URL, JSON, Arweave) and `data` (the actual metadata content).
- `Request`: Struct representing a funding request, including ship ID, operator ID, requested amount, status, timestamp, and metadata.
- `Ship`: Struct representing a funding source or allocation unit, including distributed amount, pending amount, total distribution, operator ID, and metadata.

### State Variables
- `IHats hats`: Interface instance for the Hats protocol.
- `uint256 facilitatorHatId`: ID for tracking facilitators.
- `uint256 nonce`: Incremental ID for requests.
- `mapping(uint256 => Request) public requests`: Mapping of nonce to request details.
- `mapping(uint256 => Ship) public ships`: Mapping of ship ID to ship details.

### Custom Errors
- `NotAuthorized`: Indicates unauthorized access.
- `ShipDoesNotExist`: Triggered when a referenced ship does not exist.
- `RequestDoesNotExist`: Triggered when a referenced request does not exist.
- `SpendingCapExceeded`: Raised when a request exceeds a ship's spending limit.
- `IncorrectRequestStatus`: Triggered when an operation is performed on a request with an incorrect status.

### Events
- `RequestCreated`: Emitted when a new request is created.
- `ShipDeployed`: Emitted when a new ship is deployed.
- `RequestStatusChanged`: Emitted when the status of a request changes.
- `GrantShipsDeployed`: Emitted upon contract deployment with relevant Hats protocol data.

### Constructor
Initializes the contract with the Hats protocol, sets the facilitator hat ID, and deploys ships based on provided data. It emits `ShipDeployed` and `GrantShipsDeployed` events during initialization.

### Functions
- `createRequest`: Creates a new funding request and updates pending amount for the ship.
- `rejectRequest`: Rejects a request. Accessible only to facilitators.
- `approveRequest`: Approves a request. Accessible only to facilitators.
- `distributeRequest`: Distributes the requested funds. Accessible only to facilitators.
- `cancelRequest`: Cancels a request. Accessible to request creators and facilitators.
- (Commented out) `getShip`: Fetches details of a specific ship.
- (Commented out) `getFundingAvailable`: Calculates and returns the remaining funds for a ship.

## Security and Access Control
The contract utilizes the Hats protocol for role-based access control, ensuring that only authorized users can perform specific actions. The `onlyFacilitator` modifier enforces restrictions on certain functions.

## Spending Limitations
The contract implements checks to prevent requests from exceeding the total distribution amount of a ship, ensuring adherence to budget constraints.

## Event Logging
Critical state changes in the contract, such as creation of requests, changes in their status, and deployment of ships, emit events for transparency and auditability.
