import type { INodeProperties } from 'n8n-workflow';

export const timesheetOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new timesheet',
				action: 'Create a timesheet',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a timesheet',
				action: 'Delete a timesheet',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a timesheet',
				action: 'Get a timesheet',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get all timesheets',
				action: 'Get all timesheets',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a timesheet',
				action: 'Update a timesheet',
			},
		],
		default: 'create',
	},
];

export const timesheetFields: INodeProperties[] = [
	// ----------------------------------
	//         timesheet:create
	// ----------------------------------
	{
		displayName: 'Task ID',
		name: 'task_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Task ID related to the timesheet',
	},
	{
		displayName: 'Start Time',
		name: 'start_time',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: '09:00:00',
		placeholder: 'HH:MM:SS',
		description: 'Start time in HH:MM:SS format',
	},
	{
		displayName: 'End Time',
		name: 'end_time',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: '17:00:00',
		placeholder: 'HH:MM:SS',
		description: 'End time in HH:MM:SS format',
	},
	{
		displayName: 'Staff ID',
		name: 'staff_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Staff ID who is logging time',
	},
	{
		displayName: 'Hourly Rate',
		name: 'hourly_rate',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: 0,
		typeOptions: {
			numberPrecision: 2,
		},
		description: 'Hourly rate (e.g., 5.00)',
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Notes related to the timesheet',
	},

	// ----------------------------------
	//         timesheet:delete
	// ----------------------------------
	{
		displayName: 'Timesheet ID',
		name: 'timesheetId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the timesheet to delete',
	},

	// ----------------------------------
	//         timesheet:get
	// ----------------------------------
	{
		displayName: 'Timesheet ID',
		name: 'timesheetId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['get'],
			},
		},
		default: 0,
		description: 'ID of the timesheet to retrieve',
	},

	// ----------------------------------
	//         timesheet:update
	// ----------------------------------
	{
		displayName: 'Timesheet ID',
		name: 'timesheetId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the timesheet to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Task ID',
				name: 'task_id',
				type: 'number',
				default: 0,
				description: 'Task ID related to the timesheet',
			},
			{
				displayName: 'Start Time',
				name: 'start_time',
				type: 'string',
				default: '',
				placeholder: 'HH:MM:SS',
				description: 'Start time in HH:MM:SS format',
			},
			{
				displayName: 'End Time',
				name: 'end_time',
				type: 'string',
				default: '',
				placeholder: 'HH:MM:SS',
				description: 'End time in HH:MM:SS format',
			},
			{
				displayName: 'Staff ID',
				name: 'staff_id',
				type: 'number',
				default: 0,
				description: 'Staff ID who is logging time',
			},
			{
				displayName: 'Hourly Rate',
				name: 'hourly_rate',
				type: 'number',
				default: 0,
				typeOptions: {
					numberPrecision: 2,
				},
				description: 'Hourly rate (e.g., 5.00)',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'Notes related to the timesheet',
			},
		],
	},
];
