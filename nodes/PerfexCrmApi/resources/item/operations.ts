import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

/**
 * Get a single item by ID
 */
export async function getItem(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const itemId = this.getNodeParameter('itemId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/items/${itemId}`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		json: true,
	});

	return [
		{
			json: response as IDataObject,
			pairedItem: { item: index },
		},
	];
}

/**
 * Search items by keyword
 */
export async function searchItems(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const searchTerm = this.getNodeParameter('searchTerm', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/items/search/${searchTerm}`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		json: true,
	});

	return [
		{
			json: response as IDataObject,
			pairedItem: { item: index },
		},
	];
}