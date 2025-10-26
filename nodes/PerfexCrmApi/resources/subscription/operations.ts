import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

/**
 * Create a new subscription
 */
export async function createSubscription(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const name = this.getNodeParameter('name', index) as string;
	const clientid = this.getNodeParameter('clientid', index) as number;
	const date = this.getNodeParameter('date', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		name,
		clientid,
		date,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/subscriptions`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		body,
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
 * Delete a subscription
 */
export async function deleteSubscription(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const subscriptionId = this.getNodeParameter('subscriptionId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/subscriptions/${subscriptionId}`,
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
 * Get a single subscription by ID
 */
export async function getSubscription(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const subscriptionId = this.getNodeParameter('subscriptionId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/subscriptions/${subscriptionId}`,
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
 * Get all subscriptions
 */
export async function getAllSubscriptions(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/subscriptions`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		json: true,
	});

	return [
		{
			json: response as IDataObject,
		},
	];
}

/**
 * Update an existing subscription
 */
export async function updateSubscription(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const subscriptionId = this.getNodeParameter('subscriptionId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {
		...updateFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/subscriptions/${subscriptionId}`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	});

	return [
		{
			json: response as IDataObject,
			pairedItem: { item: index },
		},
	];
}