import type { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new customer',
				action: 'Create a customer',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a customer',
				action: 'Delete a customer',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a customer',
				action: 'Get a customer',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many customers',
				action: 'Get many customers',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a customer',
				action: 'Update a customer',
			},
		],
		default: 'create',
	},
];

export const customerFields: INodeProperties[] = [
	// ----------------------------------
	//         Customer: create
	// ----------------------------------
	{
		displayName: 'Company',
		name: 'company',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Customer company name (mandatory)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'VAT',
				name: 'vat',
				type: 'string',
				default: '',
				description: 'VAT number',
			},
			{
				displayName: 'Phone Number',
				name: 'phonenumber',
				type: 'string',
				default: '',
				description: 'Customer phone number',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				description: 'Customer website URL',
			},
			{
				displayName: 'Groups',
				name: 'groups_in',
				type: 'string',
				default: '',
				description: 'Customer groups (comma-separated IDs)',
			},
			{
				displayName: 'Default Language',
				name: 'default_language',
				type: 'string',
				default: '',
				description: 'Default language code',
			},
			{
				displayName: 'Default Currency',
				name: 'default_currency',
				type: 'string',
				default: '',
				description: 'Default currency code',
			},
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Customer address',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'Customer city',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'Customer state',
			},
			{
				displayName: 'ZIP Code',
				name: 'zip',
				type: 'string',
				default: '',
				description: 'ZIP/postal code',
			},
			{
				displayName: 'Partnership Type',
				name: 'partnership_type',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Billing Street',
				name: 'billing_street',
				type: 'string',
				default: '',
				description: 'Billing address street',
			},
			{
				displayName: 'Billing City',
				name: 'billing_city',
				type: 'string',
				default: '',
				description: 'Billing address city',
			},
			{
				displayName: 'Billing State',
				name: 'billing_state',
				type: 'string',
				default: '',
				description: 'Billing address state',
			},
			{
				displayName: 'Billing ZIP',
				name: 'billing_zip',
				type: 'string',
				default: '',
				description: 'Billing address ZIP code',
			},
			{
				displayName: 'Billing Country',
				name: 'billing_country',
				type: 'string',
				default: '',
				description: 'Billing address country',
			},
			{
				displayName: 'Shipping Street',
				name: 'shipping_street',
				type: 'string',
				default: '',
				description: 'Shipping address street',
			},
			{
				displayName: 'Shipping City',
				name: 'shipping_city',
				type: 'string',
				default: '',
				description: 'Shipping address city',
			},
			{
				displayName: 'Shipping State',
				name: 'shipping_state',
				type: 'string',
				default: '',
				description: 'Shipping address state',
			},
			{
				displayName: 'Shipping ZIP',
				name: 'shipping_zip',
				type: 'string',
				default: '',
				description: 'Shipping address ZIP code',
			},
			{
				displayName: 'Shipping Country',
				name: 'shipping_country',
				type: 'string',
				default: '',
				description: 'Shipping address country',
			},
		],
	},

	// ----------------------------------
	//         Customer: delete
	// ----------------------------------
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the customer to delete',
	},

	// ----------------------------------
	//         Customer: get
	// ----------------------------------
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the customer to retrieve',
	},

	// ----------------------------------
	//         Customer: update
	// ----------------------------------
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the customer to update',
	},
	{
		displayName: 'Company',
		name: 'company',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Customer company name (mandatory)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'VAT',
				name: 'vat',
				type: 'string',
				default: '',
				description: 'VAT number',
			},
			{
				displayName: 'Phone Number',
				name: 'phonenumber',
				type: 'string',
				default: '',
				description: 'Customer phone number',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				description: 'Customer website URL',
			},
			{
				displayName: 'Groups',
				name: 'groups_in',
				type: 'string',
				default: '',
				description: 'Customer groups (comma-separated IDs)',
			},
			{
				displayName: 'Default Language',
				name: 'default_language',
				type: 'string',
				default: '',
				description: 'Default language code',
			},
			{
				displayName: 'Default Currency',
				name: 'default_currency',
				type: 'string',
				default: '',
				description: 'Default currency code',
			},
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Customer address',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'Customer city',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'Customer state',
			},
			{
				displayName: 'ZIP Code',
				name: 'zip',
				type: 'string',
				default: '',
				description: 'ZIP/postal code',
			},
			{
				displayName: 'Partnership Type',
				name: 'partnership_type',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Billing Street',
				name: 'billing_street',
				type: 'string',
				default: '',
				description: 'Billing address street',
			},
			{
				displayName: 'Billing City',
				name: 'billing_city',
				type: 'string',
				default: '',
				description: 'Billing address city',
			},
			{
				displayName: 'Billing State',
				name: 'billing_state',
				type: 'string',
				default: '',
				description: 'Billing address state',
			},
			{
				displayName: 'Billing ZIP',
				name: 'billing_zip',
				type: 'string',
				default: '',
				description: 'Billing address ZIP code',
			},
			{
				displayName: 'Billing Country',
				name: 'billing_country',
				type: 'string',
				default: '',
				description: 'Billing address country',
			},
			{
				displayName: 'Shipping Street',
				name: 'shipping_street',
				type: 'string',
				default: '',
				description: 'Shipping address street',
			},
			{
				displayName: 'Shipping City',
				name: 'shipping_city',
				type: 'string',
				default: '',
				description: 'Shipping address city',
			},
			{
				displayName: 'Shipping State',
				name: 'shipping_state',
				type: 'string',
				default: '',
				description: 'Shipping address state',
			},
			{
				displayName: 'Shipping ZIP',
				name: 'shipping_zip',
				type: 'string',
				default: '',
				description: 'Shipping address ZIP code',
			},
			{
				displayName: 'Shipping Country',
				name: 'shipping_country',
				type: 'string',
				default: '',
				description: 'Shipping address country',
			},
		],
	},
];