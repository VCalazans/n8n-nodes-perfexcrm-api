import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const authtoken = credentials.apiToken as string;

	// Required fields
	const subject = this.getNodeParameter('subject', index) as string;
	const related = this.getNodeParameter('related', index) as string;
	const rel_id = this.getNodeParameter('rel_id', index) as number;
	const proposal_to = this.getNodeParameter('proposal_to', index) as string;
	const date = this.getNodeParameter('date', index) as string;
	const currency = this.getNodeParameter('currency', index) as string;
	const email = this.getNodeParameter('email', index) as string;
	const newitems = this.getNodeParameter('newitems', index) as string;

	// Additional fields
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		subject,
		related,
		rel_id,
		proposal_to,
		date,
		currency,
		email,
		...additionalFields,
	};

	// Parse newitems if it's a JSON string
	try {
		body.newitems = JSON.parse(newitems);
	} catch {
		body.newitems = newitems;
	}

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/proposals`,
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

	const proposalId = this.getNodeParameter('proposalId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/proposals/${proposalId}`,
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

	const proposalId = this.getNodeParameter('proposalId', index, '') as string;

	const url = proposalId
		? `${baseUrl}/api/proposals/${proposalId}`
		: `${baseUrl}/api/proposals`;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url,
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
		url: `${baseUrl}/api/proposals/search/${query}`,
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

	const proposalId = this.getNodeParameter('proposalId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	// Parse JSON arrays if they are strings
	const arrayFields = ['newitems', 'items', 'removed_items'];
	for (const field of arrayFields) {
		if (updateFields[field] && typeof updateFields[field] === 'string') {
			try {
				updateFields[field] = JSON.parse(updateFields[field] as string);
			} catch {
				// If parsing fails, leave as string
			}
		}
	}

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/proposal/${proposalId}`,
		headers: {
			authtoken,
			'Content-Type': 'application/json',
		},
		body: updateFields,
		json: true,
	});

	return [{ json: response }];
}
