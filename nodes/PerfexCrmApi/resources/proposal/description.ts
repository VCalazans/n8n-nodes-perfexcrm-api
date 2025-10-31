import type { INodeProperties } from 'n8n-workflow';

export const proposalOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['proposal'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new proposal',
				action: 'Create a proposal',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a proposal',
				action: 'Delete a proposal',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a proposal',
				action: 'Get a proposal',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search proposals',
				action: 'Search proposals',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a proposal',
				action: 'Update a proposal',
			},
		],
		default: 'create',
	},
];

export const proposalFields: INodeProperties[] = [
	// ----------------------------------
	//         proposal:create
	// ----------------------------------
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		default: '',
		description: 'Currency ID',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		default: '',
		description: 'Proposal start date (format: YYYY-MM-DD)',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		default: '',
		placeholder: 'name@email.com',
	},
	{
		displayName: 'New Items',
		name: 'newitems',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		default: '',
		description: 'JSON array of new items to be added',
	},
	{
		displayName: 'Proposal To',
		name: 'proposal_to',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		default: '',
		description: 'Lead / Customer name',
	},
	{
		displayName: 'Related',
		name: 'related',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		options: [
			{
				name: 'Customer',
				value: 'customer',
			},
			{
				name: 'Lead',
				value: 'lead',
			},
		],
		default: 'customer',
		description: 'Proposal related type',
	},
	{
		displayName: 'Related ID',
		name: 'rel_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		default: 0,
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['proposal'],
			},
		},
		default: '',
		description: 'Proposal subject name',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Assigned',
				name: 'assigned',
				type: 'string',
				default: '',
				description: 'Assignee ID',
			},
			{
				displayName: 'Discount Type',
				name: 'discount_type',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Open Till',
				name: 'open_till',
				type: 'string',
				default: '',
				description: 'Proposal open till date (format: YYYY-MM-DD)',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Status ID',
			},
		],
	},

	// ----------------------------------
	//         proposal:delete
	// ----------------------------------
	{
		displayName: 'Proposal ID',
		name: 'proposalId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['proposal'],
			},
		},
		default: '',
	},

	// ----------------------------------
	//         proposal:get
	// ----------------------------------
	{
		displayName: 'Proposal ID',
		name: 'proposalId',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['proposal'],
			},
		},
		default: '',
		description: 'Optional proposal ID. If not provided, all proposals will be listed.',
	},

	// ----------------------------------
	//         proposal:search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['search'],
				resource: ['proposal'],
			},
		},
		default: '',
		description: 'Search keywords',
	},

	// ----------------------------------
	//         proposal:update
	// ----------------------------------
	{
		displayName: 'Proposal ID',
		name: 'proposalId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['proposal'],
			},
		},
		default: '',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Assigned',
				name: 'assigned',
				type: 'string',
				default: '',
				description: 'Assignee ID',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'Currency ID',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				description: 'Proposal start date (format: YYYY-MM-DD)',
			},
			{
				displayName: 'Discount Type',
				name: 'discount_type',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
			},
			{
				displayName: 'Items',
				name: 'items',
				type: 'string',
				default: '',
				description: 'JSON array of existing items with ID',
			},
			{
				displayName: 'New Items',
				name: 'newitems',
				type: 'string',
				default: '',
				description: 'JSON array of new items to be added',
			},
			{
				displayName: 'Open Till',
				name: 'open_till',
				type: 'string',
				default: '',
				description: 'Proposal open till date (format: YYYY-MM-DD)',
			},
			{
				displayName: 'Proposal To',
				name: 'proposal_to',
				type: 'string',
				default: '',
				description: 'Lead / Customer name',
			},
			{
				displayName: 'Related',
				name: 'related',
				type: 'options',
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Lead',
						value: 'lead',
					},
				],
				default: 'customer',
				description: 'Proposal related type',
			},
			{
				displayName: 'Related ID',
				name: 'rel_id',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Removed Items',
				name: 'removed_items',
				type: 'string',
				default: '',
				description: 'JSON array of items to be removed',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Status ID',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'Proposal subject name',
			},
		],
	},
];
