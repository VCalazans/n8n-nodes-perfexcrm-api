import type { INodeProperties } from 'n8n-workflow';

export const taskOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['task'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new task',
				action: 'Create a task',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a task',
				action: 'Delete a task',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a task',
				action: 'Get a task',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search tasks',
				action: 'Search tasks',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a task',
				action: 'Update a task',
			},
		],
		default: 'create',
	},
];

export const taskFields: INodeProperties[] = [
	// ----------------------------------
	//         task:create
	// ----------------------------------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Task name',
	},
	{
		displayName: 'Start Date',
		name: 'startdate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Task start date',
	},
	{
		displayName: 'Related To',
		name: 'rel_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Annex',
				value: 'annex',
			},
			{
				name: 'Contract',
				value: 'contract',
			},
			{
				name: 'Customer',
				value: 'customer',
			},
			{
				name: 'Expense',
				value: 'expense',
			},
			{
				name: 'Invoice',
				value: 'invoice',
			},
			{
				name: 'Lead',
				value: 'lead',
			},
			{
				name: 'Project',
				value: 'project',
			},
			{
				name: 'Proposal',
				value: 'proposal',
			},
			{
				name: 'Quotation',
				value: 'quotation',
			},
			{
				name: 'Ticket',
				value: 'ticket',
			},
		],
		default: 'project',
		description: 'Task related type',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Related ID',
				name: 'rel_id',
				type: 'number',
				default: 0,
				description: 'Related record ID',
			},
			{
				displayName: 'Due Date',
				name: 'duedate',
				type: 'dateTime',
				default: '',
				description: 'Task due date',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: '1',
					},
					{
						name: 'Medium',
						value: '2',
					},
					{
						name: 'High',
						value: '3',
					},
					{
						name: 'Urgent',
						value: '4',
					},
				],
				default: '2',
				description: 'Task priority',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Task description',
			},
			{
				displayName: 'Is Public',
				name: 'is_public',
				type: 'boolean',
				default: false,
				description: 'Whether the task is public',
			},
			{
				displayName: 'Billable',
				name: 'billable',
				type: 'boolean',
				default: false,
				description: 'Whether the task is billable',
			},
			{
				displayName: 'Hourly Rate',
				name: 'hourly_rate',
				type: 'number',
				default: 0,
				description: 'Task hourly rate',
			},
			{
				displayName: 'Milestone',
				name: 'milestone',
				type: 'number',
				default: 0,
				description: 'Task milestone ID',
			},
			{
				displayName: 'Repeat Every',
				name: 'repeat_every',
				type: 'string',
				default: '',
				description: 'Task repeat every',
			},
			{
				displayName: 'Repeat Every Custom',
				name: 'repeat_every_custom',
				type: 'number',
				default: 0,
				description: 'Task repeat every custom',
			},
			{
				displayName: 'Repeat Type Custom',
				name: 'repeat_type_custom',
				type: 'string',
				default: '',
				description: 'Task repeat type custom',
			},
			{
				displayName: 'Cycles',
				name: 'cycles',
				type: 'number',
				default: 0,
				description: 'Task cycles',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Task tags (comma-separated)',
			},
		],
	},

	// ----------------------------------
	//         task:delete
	// ----------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'The ID of the task to delete',
	},

	// ----------------------------------
	//         task:get
	// ----------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The ID of the task to retrieve',
	},

	// ----------------------------------
	//         task:search
	// ----------------------------------
	{
		displayName: 'Search Term',
		name: 'searchTerm',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Search keyword',
	},

	// ----------------------------------
	//         task:update
	// ----------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'The ID of the task to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Task name',
	},
	{
		displayName: 'Start Date',
		name: 'startdate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Task start date',
	},
	{
		displayName: 'Related To',
		name: 'rel_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: 'Annex',
				value: 'annex',
			},
			{
				name: 'Contract',
				value: 'contract',
			},
			{
				name: 'Customer',
				value: 'customer',
			},
			{
				name: 'Expense',
				value: 'expense',
			},
			{
				name: 'Invoice',
				value: 'invoice',
			},
			{
				name: 'Lead',
				value: 'lead',
			},
			{
				name: 'Project',
				value: 'project',
			},
			{
				name: 'Proposal',
				value: 'proposal',
			},
			{
				name: 'Quotation',
				value: 'quotation',
			},
			{
				name: 'Ticket',
				value: 'ticket',
			},
		],
		default: 'project',
		description: 'Task related type',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Related ID',
				name: 'rel_id',
				type: 'number',
				default: 0,
				description: 'Related record ID',
			},
			{
				displayName: 'Due Date',
				name: 'duedate',
				type: 'dateTime',
				default: '',
				description: 'Task due date',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: '1',
					},
					{
						name: 'Medium',
						value: '2',
					},
					{
						name: 'High',
						value: '3',
					},
					{
						name: 'Urgent',
						value: '4',
					},
				],
				default: '2',
				description: 'Task priority',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Task description',
			},
			{
				displayName: 'Is Public',
				name: 'is_public',
				type: 'boolean',
				default: false,
				description: 'Whether the task is public',
			},
			{
				displayName: 'Billable',
				name: 'billable',
				type: 'boolean',
				default: false,
				description: 'Whether the task is billable',
			},
			{
				displayName: 'Hourly Rate',
				name: 'hourly_rate',
				type: 'number',
				default: 0,
				description: 'Task hourly rate',
			},
			{
				displayName: 'Milestone',
				name: 'milestone',
				type: 'number',
				default: 0,
				description: 'Task milestone ID',
			},
			{
				displayName: 'Repeat Every',
				name: 'repeat_every',
				type: 'string',
				default: '',
				description: 'Task repeat every',
			},
			{
				displayName: 'Repeat Every Custom',
				name: 'repeat_every_custom',
				type: 'number',
				default: 0,
				description: 'Task repeat every custom',
			},
			{
				displayName: 'Repeat Type Custom',
				name: 'repeat_type_custom',
				type: 'string',
				default: '',
				description: 'Task repeat type custom',
			},
			{
				displayName: 'Cycles',
				name: 'cycles',
				type: 'number',
				default: 0,
				description: 'Task cycles',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Task tags (comma-separated)',
			},
		],
	},
];
