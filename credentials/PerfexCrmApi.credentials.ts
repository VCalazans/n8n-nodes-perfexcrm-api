import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class PerfexCrmApi implements ICredentialType {
	name = 'perfexCrmApi';

	displayName = 'PerfexCRM API';

	documentationUrl = 'https://help.perfexcrm.com/';

	icon = 'file:../icons/perfexcrm.svg' as const;

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'https://yourcrm.com',
			description: 'The base URL of your PerfexCRM installation (without /api)',
		},
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'The API token for your PerfexCRM installation',
		},
	];

	test = {
		request: {
			baseURL: '={{$credentials.baseUrl}}/api',
			url: '/leads',
			headers: {
				'authtoken': '={{$credentials.apiToken}}',
			},
		},
	};
}