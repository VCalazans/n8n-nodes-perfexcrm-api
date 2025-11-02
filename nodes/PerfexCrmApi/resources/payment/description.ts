import type { INodeProperties } from 'n8n-workflow';

export const paymentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['payment'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new payment',
				action: 'Create a payment',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many payments',
				action: 'Get many payments',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search payments',
				action: 'Search payments',
			},
		],
		default: 'create',
	},
];

export const paymentFields: INodeProperties[] = [
	// ----------------------------------
	//         payment:create
	// ----------------------------------
	{
		displayName: 'Invoice ID',
		name: 'invoiceid',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['payment'],
			},
		},
		default: '',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['payment'],
			},
		},
		default: '',
	},
	{
		displayName: 'Payment Mode',
		name: 'paymentmode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['payment'],
			},
		},
		default: '',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['payment'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Custom Fields',
				name: 'custom_fields',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Payment Method',
				name: 'paymentmethod',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Transaction ID',
				name: 'transactionid',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------
	//         payment:getAll
	// ----------------------------------
	{
		displayName: 'Payment ID',
		name: 'paymentId',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['payment'],
			},
		},
		default: '',
		description: 'Optional payment ID. If not provided, all payments will be listed.',
	},

	// ----------------------------------
	//         payment:search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['search'],
				resource: ['payment'],
			},
		},
		default: '',
		description: 'Search keywords',
	},
];
