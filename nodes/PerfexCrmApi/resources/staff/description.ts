import type { INodeProperties } from 'n8n-workflow';

export const staffOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['staff'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new staff',
				action: 'Create a staff',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a staff',
				action: 'Delete a staff',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a staff',
				action: 'Get a staff',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search staffs',
				action: 'Search staffs',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a staff',
				action: 'Update a staff',
			},
		],
		default: 'create',
	},
];

export const staffFields: INodeProperties[] = [
	// ----------------------------------
	//         staff:create
	// ----------------------------------
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['staff'],
			},
		},
		default: '',
		placeholder: 'name@email.com',
	},
	{
		displayName: 'First Name',
		name: 'firstname',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['staff'],
			},
		},
		default: '',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['staff'],
			},
		},
		default: '',
		typeOptions: {
			password: true,
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['staff'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Default Language',
				name: 'default_language',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Departments',
				name: 'departments',
				type: 'string',
				default: '',
				description: 'JSON array of department IDs',
			},
			{
				displayName: 'Direction',
				name: 'direction',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email Signature',
				name: 'email_signature',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Facebook',
				name: 'facebook',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Hourly Rate',
				name: 'hourly_rate',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'LinkedIn',
				name: 'linkedin',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone Number',
				name: 'phonenumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Send Welcome Email',
				name: 'send_welcome_email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype',
				name: 'skype',
				type: 'string',
				default: '',
			},
		],
	},

	// ----------------------------------
	//         staff:delete
	// ----------------------------------
	{
		displayName: 'Staff ID',
		name: 'staffId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['staff'],
			},
		},
		default: '',
	},

	// ----------------------------------
	//         staff:get
	// ----------------------------------
	{
		displayName: 'Staff ID',
		name: 'staffId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['staff'],
			},
		},
		default: '',
	},

	// ----------------------------------
	//         staff:search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['search'],
				resource: ['staff'],
			},
		},
		default: '',
		description: 'Search keywords',
	},

	// ----------------------------------
	//         staff:update
	// ----------------------------------
	{
		displayName: 'Staff ID',
		name: 'staffId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['staff'],
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
				resource: ['staff'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Default Language',
				name: 'default_language',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Departments',
				name: 'departments',
				type: 'string',
				default: '',
				description: 'JSON array of department IDs',
			},
			{
				displayName: 'Direction',
				name: 'direction',
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
				displayName: 'Email Signature',
				name: 'email_signature',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Facebook',
				name: 'facebook',
				type: 'string',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'firstname',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Hourly Rate',
				name: 'hourly_rate',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'LinkedIn',
				name: 'linkedin',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				default: '',
				typeOptions: {
					password: true,
				},
			},
			{
				displayName: 'Phone Number',
				name: 'phonenumber',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Skype',
				name: 'skype',
				type: 'string',
				default: '',
			},
		],
	},
];
