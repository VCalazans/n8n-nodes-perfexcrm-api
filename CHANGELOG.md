# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-10-26

### Added

- Initial release of n8n-nodes-perfexcrm-api
- Comprehensive PerfexCRM API integration (requires PerfexCRM API module from https://perfexapi.com/)
- **7 Resources Fully Implemented**:
  - Calendar Events (5 operations)
  - Customers (5 operations)
  - Items (2 operations)
  - Leads (6 operations)
  - Subscriptions (5 operations)
  - Tasks (5 operations)
  - Tickets (5 operations)
- **Over 30 operations** across all resources
- PerfexCRM API credentials support with API token authentication
- Form-encoded data support for POST operations
- JSON data support for GET/PUT/DELETE operations
- Date formatting for Calendar Events (MySQL datetime format)
- Comprehensive error handling
- TypeScript implementation with full type safety
- n8n community node standards compliance

### Supported Operations

#### Calendar Event Resource (5 operations)
- **create**: Create a new calendar event with automatic date formatting
- **delete**: Remove a calendar event by ID
- **get**: Retrieve a specific calendar event by ID
- **getAll**: Fetch all calendar events
- **update**: Update an existing calendar event

#### Customer Resource (5 operations)
- **create**: Create a new customer
- **delete**: Remove a customer by ID
- **get**: Retrieve a specific customer by ID
- **getAll**: Fetch all customers
- **update**: Update an existing customer

#### Item Resource (2 operations)
- **get**: Retrieve a specific item by ID
- **search**: Search items by term

#### Lead Resource (6 operations)
- **create**: Create a new lead with all fields support
- **delete**: Remove a lead by ID
- **get**: Retrieve a specific lead by ID
- **getAll**: Fetch all leads
- **search**: Search leads by term
- **update**: Update an existing lead

#### Subscription Resource (5 operations)
- **create**: Create a new subscription
- **delete**: Remove a subscription by ID
- **get**: Retrieve a specific subscription by ID
- **getAll**: Fetch all subscriptions
- **update**: Update an existing subscription

#### Task Resource (5 operations)
- **create**: Create a new task
- **delete**: Remove a task by ID
- **get**: Retrieve a specific task by ID
- **search**: Search tasks by term
- **update**: Update an existing task

#### Ticket Resource (5 operations)
- **create**: Create a new support ticket
- **delete**: Remove a ticket by ID
- **get**: Retrieve a specific ticket by ID
- **search**: Search tickets by term
- **update**: Update an existing ticket

### Technical Details

- Built with n8n Node API v1
- TypeScript 5.9.2 compatibility
- Node.js 18+ support
- ESLint compliance with n8n standards
- MIT License
- Repository: https://github.com/VCalazans/n8n-nodes-perfexcrm-api

### Authentication

- API Token authentication
- Configurable base URL for self-hosted PerfexCRM instances
- Secure credential storage in n8n
- Manual header configuration for all requests

### Key Features

- **Most Complete PerfexCRM Integration**: 7 resources with full CRUD operations
- **Better Implementation**: Follows Lead module patterns for all resources
- **Date Handling**: Automatic date formatting for Calendar Events
- **Type Safety**: Full TypeScript implementation
- **Better Error Handling**: Comprehensive error management and validation
- **Active Development**: Regular updates and community support
- **Complete Documentation**: Clear setup instructions and detailed examples for all resources

### Known Limitations

- File uploads not yet implemented
- Requires PerfexCRM API module (available at https://perfexapi.com/)
- Some advanced PerfexCRM features may require additional API endpoints

### Bug Fixes

- Fixed Calendar Event date formatting (was storing incorrect dates)
- Fixed form-urlencoded encoding for POST operations
- Corrected Content-Type headers for all operations
