import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const authtoken = credentials.apiToken as string;

	// Required fields
	const name = this.getNodeParameter('name', index) as string;
	const rel_type = this.getNodeParameter('rel_type', index) as string;
	const clientid = this.getNodeParameter('clientid', index) as number;
	const billing_type = this.getNodeParameter('billing_type', index) as number;
	const start_date = this.getNodeParameter('start_date', index) as string;
	const status = this.getNodeParameter('status', index) as number;

	// Additional fields
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		name,
		rel_type,
		clientid,
		billing_type,
		start_date,
		status,
		...additionalFields,
	};

	// Parse project_members if it's a JSON string
	if (body.project_members && typeof body.project_members === 'string') {
		try {
			body.project_members = JSON.parse(body.project_members as string);
		} catch {
			// If parsing fails, leave as string
		}
	}

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/projects`,
		headers: {
			authtoken,
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
	const authtoken = credentials.apiToken as string;

	const projectId = this.getNodeParameter('projectId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/delete/projects/${projectId}`,
		headers: {
			authtoken,
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
	const authtoken = credentials.apiToken as string;

	const projectId = this.getNodeParameter('projectId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/projects/${projectId}`,
		headers: {
			authtoken,
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
	const authtoken = credentials.apiToken as string;

	const query = this.getNodeParameter('query', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/projects/search/${query}`,
		headers: {
			authtoken,
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
	const authtoken = credentials.apiToken as string;

	const projectId = this.getNodeParameter('projectId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	// Parse project_members if it's a JSON string
	if (updateFields.project_members && typeof updateFields.project_members === 'string') {
		try {
			updateFields.project_members = JSON.parse(updateFields.project_members as string);
		} catch {
			// If parsing fails, leave as string
		}
	}

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/projects/${projectId}`,
		headers: {
			authtoken,
			'Content-Type': 'application/json',
		},
		body: updateFields,
		json: true,
	});

	return [{ json: response }];
}
