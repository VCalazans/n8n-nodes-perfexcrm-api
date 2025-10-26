import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

/**
 * Create a new lead
 */
export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const name = this.getNodeParameter('name', index) as string;
	const source = this.getNodeParameter('source', index) as string;
	const status = this.getNodeParameter('status', index) as string;
	const assigned = this.getNodeParameter('assigned', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	// Build form data for application/x-www-form-urlencoded
	const formParts: string[] = [];
	formParts.push(`name=${encodeURIComponent(name)}`);
	formParts.push(`source=${encodeURIComponent(source)}`);
	formParts.push(`status=${encodeURIComponent(status)}`);
	formParts.push(`assigned=${encodeURIComponent(assigned)}`);
	
	// Add additional fields
	for (const [key, value] of Object.entries(additionalFields)) {
		if (value !== undefined && value !== null && value !== '') {
			formParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
		}
	}

	const formBody = formParts.join('&');

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/leads`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/x-www-form-urlencoded',
			'Cookie': 'csrf_cookie_name=8be88d40f3636e277a1b31958803fce5; sp_session=5165c502d1009945c982be2f6475fece',
		},
		body: formBody,
	});

	return [
		{
			json: response as IDataObject,
			pairedItem: { item: index },
		},
	];
}

/**
 * Delete a lead
 */
export async function del(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const leadId = this.getNodeParameter('leadId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/delete/leads/${leadId}`,
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
 * Get a single lead by ID
 */
export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const leadId = this.getNodeParameter('leadId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/leads/${leadId}`,
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
 * Get all leads
 */
export async function getAll(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/leads`,
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
 * Search leads by term
 */
export async function search(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const searchTerm = this.getNodeParameter('searchTerm', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/leads/search/${searchTerm}`,
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
 * Update an existing lead
 */
export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const leadId = this.getNodeParameter('leadId', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const source = this.getNodeParameter('source', index) as string;
	const status = this.getNodeParameter('status', index) as string;
	const assigned = this.getNodeParameter('assigned', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		name,
		source,
		status,
		assigned,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/leads/${leadId}`,
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