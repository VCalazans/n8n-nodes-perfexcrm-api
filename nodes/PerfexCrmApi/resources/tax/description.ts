import type { INodeProperties } from 'n8n-workflow';

export const taxOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tax'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many taxes',
				action: 'Get many taxes',
			},
		],
		default: 'getAll',
	},
];

export const taxFields: INodeProperties[] = [];
