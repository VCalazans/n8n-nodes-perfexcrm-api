# n8n-nodes-perfexcrm-api

![n8n-nodes-perfexcrm-api](https://img.shields.io/badge/n8n-community%20node-green)
![npm version](https://img.shields.io/npm/v/n8n-nodes-perfexcrm-api)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This is an n8n community node that provides comprehensive integration with [PerfexCRM](https://www.perfexcrm.com/) API, allowing you to manage Calendar Events, Customers, Items, Leads, Subscriptions, Tasks, and Tickets with full CRUD operations directly from your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## 📋 Prerequisites - PerfexCRM API Module

This n8n node requires the PerfexCRM API module to be installed on your PerfexCRM instance.

### 👉 [Purchase the PerfexCRM API Module](https://codecanyon.net/item/rest-api-for-perfex-crm/25278359)

The module provides:
- RESTful API endpoints for PerfexCRM entities
- API key authentication
- Rate limiting and security features
- Comprehensive API documentation

## 🚀 **Why Choose This Node?**

### **✅ Complete Resource Management**
- **7 Resources Implemented**: Calendar Events, Customers, Items, Leads, Subscriptions, Tasks, Tickets
- Full CRUD operations for each resource
- Support for all fields including custom fields
- Proper form-encoded data handling where required
- Over 30 operations fully implemented and tested

### **✅ Better Implementation**
- Most comprehensive PerfexCRM integration available
- Better error handling and data validation
- TypeScript implementation with full type safety
- Follows n8n community standards
- Date formatting for Calendar Events

### **✅ Community Focused**
- Open source with active development
- Clear documentation and examples
- Regular updates and bug fixes

## Table of Contents

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Usage](#usage)
- [Examples](#examples)
- [Compatibility](#compatibility)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

For n8n cloud users, this node will be available after verification.

For self-hosted n8n users:

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-perfexcrm-api`
4. Agree to the risks of using community nodes (see note below)
5. Select **Install**

After installation, the PerfexCRM node will be available in your n8n editor.

## Operations

The PerfexCRM node supports the following resources and operations:

### Calendar Event Operations (5 operations)

- **Create**: Create a new calendar event with date/time
- **Delete**: Remove an existing calendar event by ID
- **Get**: Retrieve a specific calendar event by ID
- **Get Many**: Fetch all calendar events
- **Update**: Modify an existing calendar event

### Customer Operations (5 operations)

- **Create**: Create a new customer
- **Delete**: Remove an existing customer by ID
- **Get**: Retrieve a specific customer by ID
- **Get All**: Fetch all customers
- **Update**: Modify an existing customer

### Item Operations (2 operations)

- **Get**: Retrieve a specific item by ID
- **Search**: Search for items using search terms

### Lead Operations (6 operations)

- **Create**: Create a new lead with all required and optional fields
- **Delete**: Remove an existing lead by ID
- **Get**: Retrieve a specific lead by ID
- **Get All**: Fetch all leads from your PerfexCRM instance
- **Search**: Search for leads using search terms
- **Update**: Modify an existing lead's information

### Subscription Operations (5 operations)

- **Create**: Create a new subscription
- **Delete**: Remove an existing subscription by ID
- **Get**: Retrieve a specific subscription by ID
- **Get All**: Fetch all subscriptions
- **Update**: Modify an existing subscription

### Task Operations (5 operations)

- **Create**: Create a new task
- **Delete**: Remove an existing task by ID
- **Get**: Retrieve a specific task by ID
- **Search**: Search for tasks using search terms
- **Update**: Modify an existing task

### Ticket Operations (5 operations)

- **Create**: Create a new ticket
- **Delete**: Remove an existing ticket by ID
- **Get**: Retrieve a specific ticket by ID
- **Search**: Search for tickets using search terms
- **Update**: Modify an existing ticket

## Credentials

To use this node, you need to configure the **PerfexCRM API** credentials:

### Required Fields

- **Base URL**: Your PerfexCRM installation URL (e.g., `https://yourcrm.com`)
- **API Token**: Your PerfexCRM API authentication token

### How to Get Your API Token

1. Log into your PerfexCRM instance
2. Go to **Setup > API** or **API > API Management**
3. Generate or copy your API token
4. Ensure API access is enabled for your user role

## Usage

### Basic Workflow Example

1. Add the **PerfexCRM** node to your workflow
2. Select the desired **Resource** (Calendar Event, Customer, Item, Lead, Subscription, Task, or Ticket)
3. Choose your desired operation (Create, Get, Update, etc.)
4. Configure the required parameters
5. Connect your PerfexCRM API credentials

### Create Calendar Event Example

To create a new calendar event:

1. Set **Resource** to `Calendar Event`
2. Set **Operation** to `Create`
3. Fill in the required fields:
   - **Title**: Event title
   - **Start**: Event start date/time (automatically formatted)
   - **Reminder Before Type**: minutes/hours/days
   - **Reminder Before**: Numeric value
   - **User ID**: Assigned user
   - **Is Start Notified**: Yes/No
   - **Public**: Yes/No
4. Optionally, add description and color

### Create Lead Example

To create a new lead:

1. Set **Operation** to `Create`
2. Fill in the required fields:
   - **Name**: Lead's name
   - **Source**: Lead source
   - **Status**: Lead status
   - **Assigned**: User ID to assign the lead to
3. Optionally, add additional fields like email, phone, company, etc.

### Search Leads Example

To search for leads:

1. Set **Resource** to `Lead`
2. Set **Operation** to `Search`
3. Enter your **Search Term**
4. The node will return matching leads

## Examples

### Complete Calendar Event Management Workflow

```json
{
  "nodes": [
    {
      "name": "Create Calendar Event",
      "type": "n8n-nodes-perfexcrm-api.perfexCrm",
      "parameters": {
        "resource": "calendarEvent",
        "operation": "create",
        "title": "Team Meeting",
        "start": "2025-10-27T10:00:00",
        "reminder_before_type": "minutes",
        "reminder_before": 30,
        "userid": "1",
        "isstartnotified": "0",
        "public": "1",
        "additionalFields": {
          "description": "Discuss Q4 goals",
          "color": "#03a9f4"
        }
      }
    }
  ]
}
```

### Complete Lead Management Workflow

```json
{
  "nodes": [
    {
      "name": "Create Lead",
      "type": "n8n-nodes-perfexcrm-api.perfexCrm",
      "parameters": {
        "resource": "lead",
        "operation": "create",
        "name": "John Doe",
        "source": "1",
        "status": "1",
        "assigned": "1",
        "additionalFields": {
          "email": "john@example.com",
          "phonenumber": "+1234567890",
          "company": "Acme Corp"
        }
      }
    }
  ]
}
```

### Integration with Other Services

This node works great with:

- **Webhook** nodes for lead capture from forms
- **Email** nodes for lead follow-up automation
- **Spreadsheet** nodes for lead data import/export
- **HTTP Request** nodes for additional PerfexCRM API calls

## Compatibility

- **n8n version**: 1.0.0 and above
- **PerfexCRM version**: Compatible with PerfexCRM API v1
- **Node.js version**: 18.0.0 and above

## Known Limitations

- Requires valid API token with appropriate permissions
- File uploads not yet supported
- Some advanced PerfexCRM features may require additional API endpoints

## Development

### Building the Node

```bash
npm install
npm run build
```

### Running Tests

```bash
npm run dev
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## Contributing

Found a bug or want to add a feature? Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

- [GitHub Issues](https://github.com/VCalazans/n8n-nodes-perfexcrm-api/issues) - Bug reports and feature requests
- [n8n Community Forum](https://community.n8n.io/) - General n8n discussions
- [PerfexCRM API Documentation](https://perfexcrm.themesic.com/apiguide/) - Official PerfexCRM API Rest documentation

## Changelog

### 0.1.0

- Initial release
- 7 Resources implemented: Calendar Events, Customers, Items, Leads, Subscriptions, Tasks, Tickets
- Over 30 operations available
- Full CRUD operations for most resources
- API token authentication
- Search functionality for applicable resources
- Comprehensive error handling
- Date formatting for Calendar Events

## License

[MIT](LICENSE.md)

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [PerfexCRM API Documentation](https://perfexcrm.themesic.com/apiguide/) - Official PerfexCRM API Rest documentation
- [PerfexCRM API Module](https://codecanyon.net/item/rest-api-for-perfex-crm/25278359) - Purchase the required API module
- [n8n Node Development Guide](https://docs.n8n.io/integrations/creating-nodes/)

---

**Disclaimer**: This is a community node and is not officially supported by n8n or PerfexCRM. Use at your own risk and ensure you comply with your organization's security policies.
