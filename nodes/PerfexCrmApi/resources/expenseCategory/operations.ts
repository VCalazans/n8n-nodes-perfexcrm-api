import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export async function getAll(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/common/expense_category`,
		headers: {
			authtoken: credentials.apiToken as string,
		},
		json: true,
	});

	return [{ json: response }];
}
