import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const amount = this.getNodeParameter('amount', index) as number;
	const category = this.getNodeParameter('category', index) as number;
	const currency = this.getNodeParameter('currency', index) as number;
	const date = this.getNodeParameter('date', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		amount,
		category,
		currency,
		date,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/expenses`,
		headers: {
			authtoken: credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	});

	return [{ json: response }];
}

export async function del(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const expenseId = this.getNodeParameter('expenseId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/expenses/${expenseId}`,
		headers: {
			authtoken: credentials.apiToken as string,
		},
		json: true,
	});

	return [{ json: response }];
}

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const expenseId = this.getNodeParameter('expenseId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/expenses/${expenseId}`,
		headers: {
			authtoken: credentials.apiToken as string,
		},
		json: true,
	});

	return [{ json: response }];
}

export async function search(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const query = this.getNodeParameter('query', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/expenses/search/${query}`,
		headers: {
			authtoken: credentials.apiToken as string,
		},
		json: true,
	});

	return [{ json: response }];
}

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const expenseId = this.getNodeParameter('expenseId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {
		expenseid: expenseId,
		...updateFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/expenses`,
		headers: {
			authtoken: credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	});

	return [{ json: response }];
}
