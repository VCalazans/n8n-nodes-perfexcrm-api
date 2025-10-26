import type { INodeProperties } from 'n8n-workflow';

export const subscriptionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new subscription',
				action: 'Create a subscription',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a subscription',
				action: 'Delete a subscription',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a subscription',
				action: 'Get a subscription',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many subscriptions',
				action: 'Get many subscriptions',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a subscription',
				action: 'Update a subscription',
			},
		],
		default: 'create',
	},
];

export const subscriptionFields: INodeProperties[] = [
	// ----------------------------------
	//         Subscription: create
	// ----------------------------------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Subscription name',
	},
	{
		displayName: 'Client ID',
		name: 'clientid',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
		default: 0,

	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
		default: '',
		placeholder: 'YYYY-MM-DD',
		description: 'Subscription start date',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Detailed description of the subscription',
			},
			{
				displayName: 'Description in Item',
				name: 'description_in_item',
				type: 'number',
				default: 0,
				description: 'Indicates if the description is included in the item (1 or 0)',
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				description: 'Subscription terms',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'number',
				default: 0,
				description: 'Currency ID',
			},
			{
				displayName: 'Tax ID',
				name: 'tax_id',
				type: 'number',
				default: 0,

			},
			{
				displayName: 'Tax ID 2',
				name: 'tax_id_2',
				type: 'number',
				default: 0,
				description: 'Second tax ID',
			},
			{
				displayName: 'Stripe Tax ID 2',
				name: 'stripe_tax_id_2',
				type: 'string',
				default: '',
				description: 'Stripe tax ID',
			},
			{
				displayName: 'Stripe Plan ID',
				name: 'stripe_plan_id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Stripe Subscription ID',
				name: 'stripe_subscription_id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Next Billing Cycle',
				name: 'next_billing_cycle',
				type: 'number',
				default: 0,
				description: 'Next billing cycle timestamp',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'number',
				default: 0,
				description: 'Subscription end timestamp',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: 'active',
				description: 'Subscription status (e.g., active)',
			},
			{
				displayName: 'Quantity',
				name: 'quantity',
				type: 'number',
				default: 1,
				description: 'Subscription quantity',
			},
			{
				displayName: 'Project ID',
				name: 'project_id',
				type: 'number',
				default: 0,
				description: 'Associated project ID',
			},
			{
				displayName: 'Hash',
				name: 'hash',
				type: 'string',
				default: '',
				description: 'Unique hash identifier',
			},
			{
				displayName: 'Created',
				name: 'created',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Creation timestamp',
			},
			{
				displayName: 'Created From',
				name: 'created_from',
				type: 'number',
				default: 0,
				description: 'ID of the creator',
			},
			{
				displayName: 'Date Subscribed',
				name: 'date_subscribed',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Subscription date',
			},
			{
				displayName: 'In Test Environment',
				name: 'in_test_environment',
				type: 'number',
				default: 0,
				description: 'Indicates if the subscription is in a test environment (1 or 0)',
			},
			{
				displayName: 'Last Sent At',
				name: 'last_sent_at',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Last sent timestamp',
			},
		],
	},

	// ----------------------------------
	//         Subscription: delete
	// ----------------------------------
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the subscription to delete',
	},

	// ----------------------------------
	//         Subscription: get
	// ----------------------------------
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the subscription to retrieve',
	},

	// ----------------------------------
	//         Subscription: update
	// ----------------------------------
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the subscription to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Subscription name',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Detailed description of the subscription',
			},
			{
				displayName: 'Description in Item',
				name: 'description_in_item',
				type: 'number',
				default: 0,
				description: 'Indicates if the description is included in the item (1 or 0)',
			},
			{
				displayName: 'Client ID',
				name: 'clientid',
				type: 'number',
				default: 0,

			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Subscription start date',
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				description: 'Subscription terms',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'number',
				default: 0,
				description: 'Currency ID',
			},
			{
				displayName: 'Tax ID',
				name: 'tax_id',
				type: 'number',
				default: 0,

			},
			{
				displayName: 'Tax ID 2',
				name: 'tax_id_2',
				type: 'number',
				default: 0,
				description: 'Second tax ID',
			},
			{
				displayName: 'Stripe Tax ID 2',
				name: 'stripe_tax_id_2',
				type: 'string',
				default: '',
				description: 'Stripe tax ID',
			},
			{
				displayName: 'Stripe Plan ID',
				name: 'stripe_plan_id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Stripe Subscription ID',
				name: 'stripe_subscription_id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Next Billing Cycle',
				name: 'next_billing_cycle',
				type: 'number',
				default: 0,
				description: 'Next billing cycle timestamp',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'number',
				default: 0,
				description: 'Subscription end timestamp',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Subscription status (e.g., active)',
			},
			{
				displayName: 'Quantity',
				name: 'quantity',
				type: 'number',
				default: 0,
				description: 'Subscription quantity',
			},
			{
				displayName: 'Project ID',
				name: 'project_id',
				type: 'number',
				default: 0,
				description: 'Associated project ID',
			},
			{
				displayName: 'Hash',
				name: 'hash',
				type: 'string',
				default: '',
				description: 'Unique hash identifier',
			},
			{
				displayName: 'Created',
				name: 'created',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Creation timestamp',
			},
			{
				displayName: 'Created From',
				name: 'created_from',
				type: 'number',
				default: 0,
				description: 'ID of the creator',
			},
			{
				displayName: 'Date Subscribed',
				name: 'date_subscribed',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Subscription date',
			},
			{
				displayName: 'In Test Environment',
				name: 'in_test_environment',
				type: 'number',
				default: 0,
				description: 'Indicates if the subscription is in a test environment (1 or 0)',
			},
			{
				displayName: 'Last Sent At',
				name: 'last_sent_at',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Last sent timestamp',
			},
		],
	},
];