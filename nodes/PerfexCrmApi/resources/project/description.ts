import type { INodeProperties } from 'n8n-workflow';

export const projectOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['project'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new project',
				action: 'Create a project',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a project',
				action: 'Delete a project',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a project',
				action: 'Get a project',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search projects',
				action: 'Search projects',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a project',
				action: 'Update a project',
			},
		],
		default: 'create',
	},
];

export const projectFields: INodeProperties[] = [
	// ----------------------------------
	//         project:create
	// ----------------------------------
	{
		displayName: 'Billing Type',
		name: 'billing_type',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['project'],
			},
		},
		default: 0,
	},
	{
		displayName: 'Client ID',
		name: 'clientid',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['project'],
			},
		},
		default: 0,
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['project'],
			},
		},
		default: '',
	},
	{
		displayName: 'Related Type',
		name: 'rel_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['project'],
			},
		},
		options: [
			{
				name: 'Customer',
				value: 'customer',
			},
			{
				name: 'Internal',
				value: 'internal',
			},
			{
				name: 'Lead',
				value: 'lead',
			},
		],
		default: 'customer',
		description: 'Project related type',
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['project'],
			},
		},
		default: '',
		description: 'Project start date (format: YYYY-MM-DD)',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['project'],
			},
		},
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Deadline',
				name: 'deadline',
				type: 'string',
				default: '',
				description: 'Project deadline (format: YYYY-MM-DD)',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Estimated Hours',
				name: 'estimated_hours',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Progress',
				name: 'progress',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Progress From Tasks',
				name: 'progress_from_tasks',
				type: 'string',
				default: '',
				description: 'On or off progress from tasks',
			},
			{
				displayName: 'Project Cost',
				name: 'project_cost',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Members',
				name: 'project_members',
				type: 'string',
				default: '',
				description: 'JSON array of project member IDs',
			},
			{
				displayName: 'Project Rate Per Hour',
				name: 'project_rate_per_hour',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------
	//         project:delete
	// ----------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['project'],
			},
		},
		default: '',
	},

	// ----------------------------------
	//         project:get
	// ----------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['project'],
			},
		},
		default: '',
	},

	// ----------------------------------
	//         project:search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['search'],
				resource: ['project'],
			},
		},
		default: '',
		description: 'Search keywords',
	},

	// ----------------------------------
	//         project:update
	// ----------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['project'],
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
				resource: ['project'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Billing Type',
				name: 'billing_type',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Client ID',
				name: 'clientid',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Deadline',
				name: 'deadline',
				type: 'string',
				default: '',
				description: 'Project deadline (format: YYYY-MM-DD)',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Estimated Hours',
				name: 'estimated_hours',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Progress',
				name: 'progress',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Progress From Tasks',
				name: 'progress_from_tasks',
				type: 'string',
				default: '',
				description: 'On or off progress from tasks',
			},
			{
				displayName: 'Project Cost',
				name: 'project_cost',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Members',
				name: 'project_members',
				type: 'string',
				default: '',
				description: 'JSON array of project member IDs',
			},
			{
				displayName: 'Project Rate Per Hour',
				name: 'project_rate_per_hour',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Related Type',
				name: 'rel_type',
				type: 'options',
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Internal',
						value: 'internal',
					},
					{
						name: 'Lead',
						value: 'lead',
					},
				],
				default: 'customer',
				description: 'Project related type',
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'string',
				default: '',
				description: 'Project start date (format: YYYY-MM-DD)',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
			},
		],
	},
];
