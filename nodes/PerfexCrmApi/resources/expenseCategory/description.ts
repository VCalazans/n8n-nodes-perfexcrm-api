import type { INodeProperties } from 'n8n-workflow';

export const expenseCategoryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['expenseCategory'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many expense categories',
				action: 'Get many expense categories',
			},
		],
		default: 'getAll',
	},
];

export const expenseCategoryFields: INodeProperties[] = [];
