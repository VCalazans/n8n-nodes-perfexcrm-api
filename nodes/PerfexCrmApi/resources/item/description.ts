import type { INodeProperties } from 'n8n-workflow';

export const itemOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['item'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve an item',
				action: 'Get an item',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search items by keyword',
				action: 'Search items',
			},
		],
		default: 'get',
	},
];

export const itemFields: INodeProperties[] = [
	// ----------------------------------
	//         Item: get
	// ----------------------------------
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['item'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the item to retrieve',
	},

	// ----------------------------------
	//         Item: search
	// ----------------------------------
	{
		displayName: 'Search Keywords',
		name: 'searchTerm',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['item'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Keywords to search for items',
	},
];