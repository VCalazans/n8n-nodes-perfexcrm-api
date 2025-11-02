import type { INodeProperties } from 'n8n-workflow';

export const expenseOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['expense'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new expense',
				action: 'Create an expense',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an expense',
				action: 'Delete an expense',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an expense',
				action: 'Get an expense',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search expenses',
				action: 'Search expenses',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an expense',
				action: 'Update an expense',
			},
		],
		default: 'get',
	},
];

export const expenseFields: INodeProperties[] = [
	// Fields for GET operation
	{
		displayName: 'Expense ID',
		name: 'expenseId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['get', 'delete'],
			},
		},
		default: '',
		description: 'The ID of the expense',
	},
	// Fields for SEARCH operation
	{
		displayName: 'Search Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Search keywords',
	},
	// Fields for CREATE operation
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Expense amount',
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Expense category ID',
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Currency ID',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Expense date (YYYY-MM-DD)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Client ID',
				name: 'clientid',
				type: 'number',
				default: 0,
				description: 'Customer ID',
			},
			{
				displayName: 'Expense Name',
				name: 'expense_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'Expense note',
			},
			{
				displayName: 'Payment Mode',
				name: 'paymentmode',
				type: 'number',
				default: 0,
				description: 'Payment mode ID',
			},
			{
				displayName: 'Recurring',
				name: 'recurring',
				type: 'string',
				default: '',
				description: 'Recurring (1 to 12 or custom)',
			},
			{
				displayName: 'Reference No',
				name: 'reference_no',
				type: 'string',
				default: '',
				description: 'Reference number',
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
				type: 'string',
				default: '',
				description: 'If recurring is custom, set gap option: day/week/month/year',
			},
			{
				displayName: 'Tax',
				name: 'tax',
				type: 'number',
				default: 0,
				description: 'Tax 1',
			},
			{
				displayName: 'Tax 2',
				name: 'tax2',
				type: 'number',
				default: 0,
			},
		],
	},
	// Fields for UPDATE operation
	{
		displayName: 'Expense ID',
		name: 'expenseId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'The ID of the expense to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['expense'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
				description: 'Expense amount',
			},
			{
				displayName: 'Category',
				name: 'category',
				type: 'number',
				default: 0,
				description: 'Expense category ID',
			},
			{
				displayName: 'Client ID',
				name: 'clientid',
				type: 'number',
				default: 0,
				description: 'Customer ID',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'number',
				default: 0,
				description: 'Currency ID',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				description: 'Expense date (YYYY-MM-DD)',
			},
			{
				displayName: 'Expense Name',
				name: 'expense_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'Expense note',
			},
			{
				displayName: 'Payment Mode',
				name: 'paymentmode',
				type: 'number',
				default: 0,
				description: 'Payment mode ID',
			},
			{
				displayName: 'Recurring',
				name: 'recurring',
				type: 'string',
				default: '',
				description: 'Recurring (1 to 12 or custom)',
			},
			{
				displayName: 'Reference No',
				name: 'reference_no',
				type: 'string',
				default: '',
				description: 'Reference number',
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
				type: 'string',
				default: '',
				description: 'If recurring is custom, set gap option: day/week/month/year',
			},
			{
				displayName: 'Tax',
				name: 'tax',
				type: 'number',
				default: 0,
				description: 'Tax 1',
			},
			{
				displayName: 'Tax 2',
				name: 'tax2',
				type: 'number',
				default: 0,
			},
		],
	},
];
