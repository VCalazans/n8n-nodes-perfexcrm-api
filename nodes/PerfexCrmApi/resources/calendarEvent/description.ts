import type { INodeProperties } from 'n8n-workflow';

export const calendarEventOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new calendar event',
				action: 'Create a calendar event',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a calendar event',
				action: 'Delete a calendar event',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a calendar event',
				action: 'Get a calendar event',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many calendar events',
				action: 'Get many calendar events',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a calendar event',
				action: 'Update a calendar event',
			},
		],
		default: 'create',
	},
];

export const calendarEventFields: INodeProperties[] = [
	// ----------------------------------
	//         calendarEvent:create
	// ----------------------------------
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Event title',
	},
	{
		displayName: 'Start',
		name: 'start',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Event start date and time',
	},
	{
		displayName: 'Reminder Before Type',
		name: 'reminder_before_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Minutes',
				value: 'minutes',
			},
			{
				name: 'Hours',
				value: 'hours',
			},
			{
				name: 'Days',
				value: 'days',
			},
		],
		default: 'minutes',
	},
	{
		displayName: 'Reminder Before',
		name: 'reminder_before',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		default: 30,
		description: 'Reminder before value',
	},
	{
		displayName: 'User ID',
		name: 'userid',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		default: '',
	},
	{
		displayName: 'Is Start Notified',
		name: 'isstartnotified',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'No',
				value: '0',
			},
			{
				name: 'Yes',
				value: '1',
			},
		],
		default: '0',
		description: 'Is start notified status',
	},
	{
		displayName: 'Public',
		name: 'public',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'No',
				value: '0',
			},
			{
				name: 'Yes',
				value: '1',
			},
		],
		default: '1',
		description: 'Public status',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '#03a9f4',
				description: 'Event color',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Event description',
			},
		],
	},

	// ----------------------------------
	//         calendarEvent:delete
	// ----------------------------------
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'The ID of the calendar event to delete',
	},

	// ----------------------------------
	//         calendarEvent:get
	// ----------------------------------
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The ID of the calendar event to retrieve',
	},

	// ----------------------------------
	//         calendarEvent:update
	// ----------------------------------
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'The ID of the calendar event to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarEvent'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '#03a9f4',
				description: 'Event color',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Event description',
			},
			{
				displayName: 'Is Start Notified',
				name: 'isstartnotified',
				type: 'options',
				options: [
					{
						name: 'No',
						value: '0',
					},
					{
						name: 'Yes',
						value: '1',
					},
				],
				default: '0',
				description: 'Is start notified status',
			},
			{
				displayName: 'Public',
				name: 'public',
				type: 'options',
				options: [
					{
						name: 'No',
						value: '0',
					},
					{
						name: 'Yes',
						value: '1',
					},
				],
				default: '1',
				description: 'Public status',
			},
			{
				displayName: 'Reminder Before',
				name: 'reminder_before',
				type: 'number',
				default: 30,
				description: 'Reminder before value',
			},
			{
				displayName: 'Reminder Before Type',
				name: 'reminder_before_type',
				type: 'options',
				options: [
					{
						name: 'Minutes',
						value: 'minutes',
					},
					{
						name: 'Hours',
						value: 'hours',
					},
					{
						name: 'Days',
						value: 'days',
					},
				],
				default: 'minutes',
			},
			{
				displayName: 'Start',
				name: 'start',
				type: 'dateTime',
				default: '',
				description: 'Event start date and time',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Event title',
			},
			{
				displayName: 'User ID',
				name: 'userid',
				type: 'string',
				default: '',
			},
		],
	},
];
