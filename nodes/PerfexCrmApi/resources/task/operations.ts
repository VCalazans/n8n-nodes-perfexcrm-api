import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

/**
 * Create a new task
 */
export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const name = this.getNodeParameter('name', index) as string;
	const startdate = this.getNodeParameter('startdate', index) as string;
	const rel_type = this.getNodeParameter('rel_type', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	// Build form data for application/x-www-form-urlencoded
	const formParts: string[] = [];
	formParts.push(`name=${encodeURIComponent(name)}`);
	formParts.push(`startdate=${encodeURIComponent(startdate)}`);
	formParts.push(`rel_type=${encodeURIComponent(rel_type)}`);
	
	// Add additional fields
	for (const [key, value] of Object.entries(additionalFields)) {
		if (value !== undefined && value !== null && value !== '') {
			formParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
		}
	}

	const formBody = formParts.join('&');

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/tasks`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/x-www-form-urlencoded',
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
 * Delete a task
 */
export async function del(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const taskId = this.getNodeParameter('taskId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/delete/tasks/${taskId}`,
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
 * Get a single task by ID
 */
export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const taskId = this.getNodeParameter('taskId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/tasks/${taskId}`,
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
 * Search tasks by term
 */
export async function search(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const searchTerm = this.getNodeParameter('searchTerm', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/tasks/search/${searchTerm}`,
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
 * Update an existing task
 */
export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const taskId = this.getNodeParameter('taskId', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const startdate = this.getNodeParameter('startdate', index) as string;
	const rel_type = this.getNodeParameter('rel_type', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		name,
		startdate,
		rel_type,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/tasks/${taskId}`,
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
