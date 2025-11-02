import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export async function getAll(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const authtoken = credentials.apiToken as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/common/tax_data`,
		headers: {
			authtoken,
		},
		json: true,
	});

	return [{ json: response }];
}
