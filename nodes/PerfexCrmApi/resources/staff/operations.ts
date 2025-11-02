import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const authtoken = credentials.apiToken as string;

	// Required fields
	const firstname = this.getNodeParameter('firstname', index) as string;
	const email = this.getNodeParameter('email', index) as string;
	const password = this.getNodeParameter('password', index) as string;

	// Additional fields
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		firstname,
		email,
		password,
		...additionalFields,
	};

	// Parse departments if it's a JSON string
	if (body.departments && typeof body.departments === 'string') {
		try {
			body.departments = JSON.parse(body.departments as string);
		} catch {
			// If parsing fails, leave as string
		}
	}

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/staffs`,
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

	const staffId = this.getNodeParameter('staffId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/delete/staffs/${staffId}`,
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

	const staffId = this.getNodeParameter('staffId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/staffs/${staffId}`,
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
		url: `${baseUrl}/api/staffs/search/${query}`,
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

	const staffId = this.getNodeParameter('staffId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	// Parse departments if it's a JSON string
	if (updateFields.departments && typeof updateFields.departments === 'string') {
		try {
			updateFields.departments = JSON.parse(updateFields.departments as string);
		} catch {
			// If parsing fails, leave as string
		}
	}

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/staffs/${staffId}`,
		headers: {
			authtoken,
			'Content-Type': 'application/json',
		},
		body: updateFields,
		json: true,
	});

	return [{ json: response }];
}
