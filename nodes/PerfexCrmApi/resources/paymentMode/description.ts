import type { INodeProperties } from 'n8n-workflow';

export const paymentModeOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['paymentMode'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many payment modes',
				action: 'Get many payment modes',
			},
		],
		default: 'getAll',
	},
];

export const paymentModeFields: INodeProperties[] = [];
