import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const authtoken = credentials.apiToken as string;

	// Required fields
	const invoiceid = this.getNodeParameter('invoiceid', index) as string;
	const amount = this.getNodeParameter('amount', index) as string;
	const paymentmode = this.getNodeParameter('paymentmode', index) as string;

	// Additional fields
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = {
		invoiceid,
		amount,
		paymentmode,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/payments`,
		headers: {
			authtoken,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	});

	return [{ json: response }];
}

export async function getAll(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const authtoken = credentials.apiToken as string;

	const paymentId = this.getNodeParameter('paymentId', 0, '') as string;

	const url = paymentId
		? `${baseUrl}/api/payments/${paymentId}`
		: `${baseUrl}/api/payments`;

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
		url: `${baseUrl}/api/payments/search/${query}`,
		headers: {
			authtoken,
		},
		json: true,
	});

	return [{ json: response }];
}
