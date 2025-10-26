import type { INodeProperties } from 'n8n-workflow';

export const leadDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lead'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new lead',
				action: 'Create a lead',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a lead',
				action: 'Delete a lead',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a lead',
				action: 'Get a lead',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many leads',
				action: 'Get many leads',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search leads',
				action: 'Search leads',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a lead',
				action: 'Update a lead',
			},
		],
		default: 'create',
	},

	// Lead ID for get, delete, update operations
	{
		displayName: 'Lead ID',
		name: 'leadId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['get', 'delete', 'update'],
				resource: ['lead'],
			},
		},
		default: '',
		description: 'The ID of the lead',
	},

	// Search term for search operation
	{
		displayName: 'Search Term',
		name: 'searchTerm',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['search'],
				resource: ['lead'],
			},
		},
		default: '',
		description: 'The search term to look for leads',
	},

	// Mandatory fields for create and update
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['lead'],
			},
		},
		default: '',
		description: 'Lead name (mandatory)',
	},
	{
		displayName: 'Source',
		name: 'source',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['lead'],
			},
		},
		default: '',
		description: 'Lead source (mandatory)',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['lead'],
			},
		},
		default: '',
		description: 'Lead status (mandatory)',
	},
	{
		displayName: 'Assigned',
		name: 'assigned',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['lead'],
			},
		},
		default: '',
		description: 'Lead assigned user (mandatory)',
	},

	// Optional fields
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['lead'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Lead address',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'Lead City',
			},
			{
				displayName: 'Client ID',
				name: 'client_id',
				type: 'string',
				default: '',
				description: 'Lead From Customer',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				description: 'Lead company',
			},
			{
				displayName: 'Contact',
				name: 'contact',
				type: 'string',
				default: '',
				description: 'Lead contact',
			},
			{
				displayName: 'Contacted Today',
				name: 'contacted_today',
				type: 'string',
				default: '',
				description: 'Lead Contacted Today',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description: 'Lead Country',
			},
			{
				displayName: 'Custom Contact Date',
				name: 'custom_contact_date',
				type: 'string',
				default: '',
				description: 'Lead From Customer',
			},
			{
				displayName: 'Default Language',
				name: 'default_language',
				type: 'string',
				default: '',
				description: 'Lead Default Language',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Lead description',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				description: 'Lead Email Address',
			},
			{
				displayName: 'Is Public',
				name: 'is_public',
				type: 'string',
				default: '',
				description: 'Lead google sheet ID',
			},
			{
				displayName: 'Last Contact',
				name: 'lastcontact',
				type: 'string',
				default: '',
				description: 'Lead Last Contact (for update only)',
			},
			{
				displayName: 'Phone Number',
				name: 'phonenumber',
				type: 'string',
				default: '',
				description: 'Lead Phone',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'Lead state',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Lead tags',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Position',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				description: 'Lead Website',
			},
			{
				displayName: 'ZIP Code',
				name: 'zip',
				type: 'string',
				default: '',
			},
		],
	},
];