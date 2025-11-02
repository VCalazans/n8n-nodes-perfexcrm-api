import type { INodeProperties } from 'n8n-workflow';

export const milestoneOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new milestone',
				action: 'Create a milestone',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a milestone',
				action: 'Delete a milestone',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a milestone',
				action: 'Get a milestone',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search milestones',
				action: 'Search milestones',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a milestone',
				action: 'Update a milestone',
			},
		],
		default: 'get',
	},
];

export const milestoneFields: INodeProperties[] = [
	// ----------------------------------
	//         milestone:create
	// ----------------------------------
	{
		displayName: 'Project ID',
		name: 'project_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Milestone name',
	},
	{
		displayName: 'Due Date',
		name: 'due_date',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Milestone due date (YYYY-MM-DD)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Milestone description',
			},
			{
				displayName: 'Description Visible to Customer',
				name: 'description_visible_to_customer',
				type: 'boolean',
				default: false,
				description: 'Whether to show description to customer',
			},
			{
				displayName: 'Milestone Order',
				name: 'milestone_order',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------
	//         milestone:delete
	// ----------------------------------
	{
		displayName: 'Milestone ID',
		name: 'milestoneId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the milestone to delete',
	},

	// ----------------------------------
	//         milestone:get
	// ----------------------------------
	{
		displayName: 'Milestone ID',
		name: 'milestoneId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the milestone to retrieve',
	},

	// ----------------------------------
	//         milestone:search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Search keywords',
	},

	// ----------------------------------
	//         milestone:update
	// ----------------------------------
	{
		displayName: 'Milestone ID',
		name: 'milestoneId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID of the milestone to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['milestone'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Milestone description',
			},
			{
				displayName: 'Description Visible to Customer',
				name: 'description_visible_to_customer',
				type: 'boolean',
				default: false,
				description: 'Whether to show description to customer',
			},
			{
				displayName: 'Due Date',
				name: 'due_date',
				type: 'string',
				default: '',
				description: 'Milestone due date (YYYY-MM-DD)',
			},
			{
				displayName: 'Milestone Order',
				name: 'milestone_order',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Milestone name',
			},
			{
				displayName: 'Project ID',
				name: 'project_id',
				type: 'string',
				default: '',
			},
		],
	},
];
