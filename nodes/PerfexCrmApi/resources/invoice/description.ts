import type { INodeProperties } from 'n8n-workflow';

export const invoiceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new invoice',
				action: 'Create an invoice',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an invoice',
				action: 'Delete an invoice',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an invoice',
				action: 'Get an invoice',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search invoices',
				action: 'Search invoices',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an invoice',
				action: 'Update an invoice',
			},
		],
		default: 'get',
	},
];

export const invoiceFields: INodeProperties[] = [
	// ----------------------------------
	//         invoice:create
	// ----------------------------------
	{
		displayName: 'Client ID',
		name: 'clientid',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Customer ID',
	},
	{
		displayName: 'Number',
		name: 'number',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Invoice number',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Invoice date (YYYY-MM-DD)',
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: 1,
		description: 'Currency ID',
	},
	{
		displayName: 'New Items (JSON)',
		name: 'newitems',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '[]',
		description: 'New items to be added as JSON array',
	},
	{
		displayName: 'Subtotal',
		name: 'subtotal',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Subtotal calculation based on item Qty, Rate and Tax',
	},
	{
		displayName: 'Total',
		name: 'total',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Total calculation based on subtotal, Discount and Adjustment',
	},
	{
		displayName: 'Billing Street',
		name: 'billing_street',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Street address for billing',
	},
	{
		displayName: 'Allowed Payment Modes (JSON)',
		name: 'allowed_payment_modes',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		default: '[]',
		description: 'Allowed payment modes as JSON array',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Admin Note',
				name: 'adminnote',
				type: 'string',
				default: '',
				description: 'Notes by admin',
			},
			{
				displayName: 'Billing City',
				name: 'billing_city',
				type: 'string',
				default: '',
				description: 'City name for billing',
			},
			{
				displayName: 'Billing Country',
				name: 'billing_country',
				type: 'number',
				default: 0,
				description: 'Country code for billing',
			},
			{
				displayName: 'Billing State',
				name: 'billing_state',
				type: 'string',
				default: '',
				description: 'State name for billing',
			},
			{
				displayName: 'Billing Zip',
				name: 'billing_zip',
				type: 'number',
				default: 0,
				description: 'Zip code for billing',
			},
			{
				displayName: 'Cancel Overdue Reminders',
				name: 'cancel_overdue_reminders',
				type: 'boolean',
				default: false,
				description: 'Whether to prevent sending overdue reminders for invoice',
			},
			{
				displayName: 'Client Note',
				name: 'clientnote',
				type: 'string',
				default: '',
				description: 'Client notes',
			},
			{
				displayName: 'Cycles',
				name: 'cycles',
				type: 'number',
				default: 0,
				description: 'Number of cycles, 0 for infinite',
			},
			{
				displayName: 'Discount Type',
				name: 'discount_type',
				type: 'options',
				options: [
					{
						name: 'Before Tax',
						value: 'before_tax',
					},
					{
						name: 'After Tax',
						value: 'after_tax',
					},
				],
				default: 'before_tax',
			},
			{
				displayName: 'Due Date',
				name: 'duedate',
				type: 'string',
				default: '',
				description: 'Due date for invoice (YYYY-MM-DD)',
			},
			{
				displayName: 'Include Shipping',
				name: 'include_shipping',
				type: 'boolean',
				default: false,
				description: 'Whether to add shipping address',
			},
			{
				displayName: 'Recurring',
				name: 'recurring',
				type: 'string',
				default: '',
				description: 'Recurring value 1 to 12 or custom',
			},
			{
				displayName: 'Removed Items (JSON)',
				name: 'removed_items',
				type: 'string',
				default: '[]',
				description: 'Items to be removed as JSON array',
			},
			{
				displayName: 'Repeat Every Custom',
				name: 'repeat_every_custom',
				type: 'number',
				default: 0,
				description: 'If recurring is custom, set number gap',
			},
			{
				displayName: 'Repeat Type Custom',
				name: 'repeat_type_custom',
				type: 'options',
				options: [
					{
						name: 'Day',
						value: 'day',
					},
					{
						name: 'Week',
						value: 'week',
					},
					{
						name: 'Month',
						value: 'month',
					},
					{
						name: 'Year',
						value: 'year',
					},
				],
				default: 'month',
				description: 'If recurring is custom, set gap option',
			},
			{
				displayName: 'Sale Agent',
				name: 'sale_agent',
				type: 'number',
				default: 0,
				description: 'Sale agent ID',
			},
			{
				displayName: 'Shipping City',
				name: 'shipping_city',
				type: 'string',
				default: '',
				description: 'City name for shipping',
			},
			{
				displayName: 'Shipping Country',
				name: 'shipping_country',
				type: 'number',
				default: 0,
				description: 'Country code for shipping',
			},
			{
				displayName: 'Shipping State',
				name: 'shipping_state',
				type: 'string',
				default: '',
				description: 'State name for shipping',
			},
			{
				displayName: 'Shipping Street',
				name: 'shipping_street',
				type: 'string',
				default: '',
				description: 'Address for shipping',
			},
			{
				displayName: 'Shipping Zip',
				name: 'shipping_zip',
				type: 'number',
				default: 0,
				description: 'Zip code for shipping',
			},
			{
				displayName: 'Show Shipping on Invoice',
				name: 'show_shipping_on_invoice',
				type: 'boolean',
				default: true,
				description: 'Whether to show shipping details in invoice',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Tags, comma-separated',
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				default: '',
				description: 'Terms and conditions',
			},
		],
	},

	// ----------------------------------
	//         invoice:delete
	// ----------------------------------
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the invoice to delete',
	},

	// ----------------------------------
	//         invoice:get
	// ----------------------------------
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the invoice to retrieve',
	},

	// ----------------------------------
	//         invoice:search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Search keywords',
	},

	// ----------------------------------
	//         invoice:update
	// ----------------------------------
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the invoice to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Admin Note',
				name: 'adminnote',
				type: 'string',
				default: '',
				description: 'Notes by admin',
			},
			{
				displayName: 'Allowed Payment Modes (JSON)',
				name: 'allowed_payment_modes',
				type: 'string',
				default: '[]',
				description: 'Allowed payment modes as JSON array',
			},
			{
				displayName: 'Billing City',
				name: 'billing_city',
				type: 'string',
				default: '',
				description: 'City name for billing',
			},
			{
				displayName: 'Billing Country',
				name: 'billing_country',
				type: 'number',
				default: 0,
				description: 'Country code for billing',
			},
			{
				displayName: 'Billing State',
				name: 'billing_state',
				type: 'string',
				default: '',
				description: 'State name for billing',
			},
			{
				displayName: 'Billing Street',
				name: 'billing_street',
				type: 'string',
				default: '',
				description: 'Street address for billing',
			},
			{
				displayName: 'Billing Zip',
				name: 'billing_zip',
				type: 'number',
				default: 0,
				description: 'Zip code for billing',
			},
			{
				displayName: 'Cancel Overdue Reminders',
				name: 'cancel_overdue_reminders',
				type: 'boolean',
				default: false,
				description: 'Whether to prevent sending overdue reminders for invoice',
			},
			{
				displayName: 'Client ID',
				name: 'clientid',
				type: 'number',
				default: 0,
				description: 'Customer ID',
			},
			{
				displayName: 'Client Note',
				name: 'clientnote',
				type: 'string',
				default: '',
				description: 'Client notes',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'number',
				default: 1,
				description: 'Currency ID',
			},
			{
				displayName: 'Cycles',
				name: 'cycles',
				type: 'number',
				default: 0,
				description: 'Number of cycles, 0 for infinite',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				description: 'Invoice date (YYYY-MM-DD)',
			},
			{
				displayName: 'Discount Type',
				name: 'discount_type',
				type: 'options',
				options: [
					{
						name: 'Before Tax',
						value: 'before_tax',
					},
					{
						name: 'After Tax',
						value: 'after_tax',
					},
				],
				default: 'before_tax',
			},
			{
				displayName: 'Due Date',
				name: 'duedate',
				type: 'string',
				default: '',
				description: 'Due date for invoice (YYYY-MM-DD)',
			},
			{
				displayName: 'Include Shipping',
				name: 'include_shipping',
				type: 'boolean',
				default: false,
				description: 'Whether to add shipping address',
			},
			{
				displayName: 'Items (JSON)',
				name: 'items',
				type: 'string',
				default: '[]',
				description: 'Existing items with ID as JSON array',
			},
			{
				displayName: 'New Items (JSON)',
				name: 'newitems',
				type: 'string',
				default: '[]',
				description: 'New items to be added as JSON array',
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'number',
				default: 0,
				description: 'Invoice number',
			},
			{
				displayName: 'Recurring',
				name: 'recurring',
				type: 'string',
				default: '',
				description: 'Recurring value 1 to 12 or custom',
			},
			{
				displayName: 'Removed Items (JSON)',
				name: 'removed_items',
				type: 'string',
				default: '[]',
				description: 'Items to be removed as JSON array',
			},
			{
				displayName: 'Repeat Every Custom',
				name: 'repeat_every_custom',
				type: 'number',
				default: 0,
				description: 'If recurring is custom, set number gap',
			},
			{
				displayName: 'Repeat Type Custom',
				name: 'repeat_type_custom',
				type: 'options',
				options: [
					{
						name: 'Day',
						value: 'day',
					},
					{
						name: 'Week',
						value: 'week',
					},
					{
						name: 'Month',
						value: 'month',
					},
					{
						name: 'Year',
						value: 'year',
					},
				],
				default: 'month',
				description: 'If recurring is custom, set gap option',
			},
			{
				displayName: 'Sale Agent',
				name: 'sale_agent',
				type: 'number',
				default: 0,
				description: 'Sale agent ID',
			},
			{
				displayName: 'Shipping City',
				name: 'shipping_city',
				type: 'string',
				default: '',
				description: 'City name for shipping',
			},
			{
				displayName: 'Shipping Country',
				name: 'shipping_country',
				type: 'number',
				default: 0,
				description: 'Country code for shipping',
			},
			{
				displayName: 'Shipping State',
				name: 'shipping_state',
				type: 'string',
				default: '',
				description: 'State name for shipping',
			},
			{
				displayName: 'Shipping Street',
				name: 'shipping_street',
				type: 'string',
				default: '',
				description: 'Address for shipping',
			},
			{
				displayName: 'Shipping Zip',
				name: 'shipping_zip',
				type: 'number',
				default: 0,
				description: 'Zip code for shipping',
			},
			{
				displayName: 'Show Shipping on Invoice',
				name: 'show_shipping_on_invoice',
				type: 'boolean',
				default: true,
				description: 'Whether to show shipping details in invoice',
			},
			{
				displayName: 'Subtotal',
				name: 'subtotal',
				type: 'number',
				default: 0,
				description: 'Subtotal calculation based on item Qty, Rate and Tax',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Tags, comma-separated',
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				default: '',
				description: 'Terms and conditions',
			},
			{
				displayName: 'Total',
				name: 'total',
				type: 'number',
				default: 0,
				description: 'Total calculation based on subtotal, Discount and Adjustment',
			},
		],
	},
];
