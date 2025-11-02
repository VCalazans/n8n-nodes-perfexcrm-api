import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const project_id = this.getNodeParameter('project_id', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const due_date = this.getNodeParameter('due_date', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		project_id,
		name,
		due_date,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/milestones`,
		headers: {
			authtoken: credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	});

	return [{ json: response }];
}

export async function del(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const milestoneId = this.getNodeParameter('milestoneId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/delete/milestones/${milestoneId}`,
		headers: {
			authtoken: credentials.apiToken as string,
		},
		json: true,
	});

	return [{ json: response }];
}

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const milestoneId = this.getNodeParameter('milestoneId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/milestones/${milestoneId}`,
		headers: {
			authtoken: credentials.apiToken as string,
		},
		json: true,
	});

	return [{ json: response }];
}

export async function search(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const query = this.getNodeParameter('query', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/milestones/search/${query}`,
		headers: {
			authtoken: credentials.apiToken as string,
		},
		json: true,
	});

	return [{ json: response }];
}

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const milestoneId = this.getNodeParameter('milestoneId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const body: IDataObject = {
		...updateFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/milestones/${milestoneId}`,
		headers: {
			authtoken: credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	});

	return [{ json: response }];
}
