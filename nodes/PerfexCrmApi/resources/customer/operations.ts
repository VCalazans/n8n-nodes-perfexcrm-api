import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

export async function createCustomer(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const company = this.getNodeParameter('company', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		company,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/customers`,
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

export async function deleteCustomer(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const customerId = this.getNodeParameter('customerId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/delete/customers/${customerId}`,
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

export async function getCustomer(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const customerId = this.getNodeParameter('customerId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/customers/${customerId}`,
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

export async function getAllCustomers(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/customers`,
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

export async function searchCustomer(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const keysearch = this.getNodeParameter('keysearch', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/customers/search/${encodeURIComponent(keysearch)}`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		json: true,
	});

	const returnData: INodeExecutionData[] = [];
	
	if (Array.isArray(response)) {
		response.forEach(item => {
			returnData.push({
				json: item,
				pairedItem: { item: index },
			});
		});
	} else {
		returnData.push({
			json: response as IDataObject,
			pairedItem: { item: index },
		});
	}

	return returnData;
}

export async function updateCustomer(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const customerId = this.getNodeParameter('customerId', index) as string;
	const company = this.getNodeParameter('company', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		company,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/customers/${customerId}`,
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