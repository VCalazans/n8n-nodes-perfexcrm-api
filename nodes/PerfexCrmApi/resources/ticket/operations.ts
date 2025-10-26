import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IHttpRequestMethods,
} from 'n8n-workflow';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const subject = this.getNodeParameter('subject', index) as string;
	const department = this.getNodeParameter('department', index) as string;
	const contactid = this.getNodeParameter('contactid', index) as string;
	const userid = this.getNodeParameter('userid', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const formParts: string[] = [];
	formParts.push(`subject=${encodeURIComponent(subject)}`);
	formParts.push(`department=${encodeURIComponent(department)}`);
	formParts.push(`contactid=${encodeURIComponent(contactid)}`);
	formParts.push(`userid=${encodeURIComponent(userid)}`);

	if (additionalFields.project_id) {
		formParts.push(`project_id=${encodeURIComponent(additionalFields.project_id as string)}`);
	}
	if (additionalFields.message) {
		formParts.push(`message=${encodeURIComponent(additionalFields.message as string)}`);
	}
	if (additionalFields.service) {
		formParts.push(`service=${encodeURIComponent(additionalFields.service as string)}`);
	}
	if (additionalFields.assigned) {
		formParts.push(`assigned=${encodeURIComponent(additionalFields.assigned as string)}`);
	}
	if (additionalFields.cc) {
		formParts.push(`cc=${encodeURIComponent(additionalFields.cc as string)}`);
	}
	if (additionalFields.priority) {
		formParts.push(`priority=${encodeURIComponent(additionalFields.priority as string)}`);
	}
	if (additionalFields.tags) {
		formParts.push(`tags=${encodeURIComponent(additionalFields.tags as string)}`);
	}

	const formBody = formParts.join('&');

	const options = {
		method: 'POST' as IHttpRequestMethods,
		url: `${baseUrl}/api/tickets`,
		headers: {
			authtoken: credentials.apiToken,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: formBody,
	};

	const responseData = await this.helpers.httpRequest(options);
	return [{ json: responseData as IDataObject }];
}

export async function del(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const ticketId = this.getNodeParameter('ticketId', index) as string;

	const options = {
		method: 'DELETE' as IHttpRequestMethods,
		url: `${baseUrl}/api/delete/tickets/${ticketId}`,
		headers: {
			authtoken: credentials.apiToken,
			'Content-Type': 'application/json',
		},
		json: true,
	};

	const responseData = await this.helpers.httpRequest(options);
	return [{ json: responseData as IDataObject }];
}

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const ticketId = this.getNodeParameter('ticketId', index) as string;

	const options = {
		method: 'GET' as IHttpRequestMethods,
		url: `${baseUrl}/api/tickets/${ticketId}`,
		headers: {
			authtoken: credentials.apiToken,
			'Content-Type': 'application/json',
		},
		json: true,
	};

	const responseData = await this.helpers.httpRequest(options);
	return [{ json: responseData as IDataObject }];
}

export async function search(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const searchTerm = this.getNodeParameter('searchTerm', index) as string;

	const options = {
		method: 'GET' as IHttpRequestMethods,
		url: `${baseUrl}/api/tickets/search/${searchTerm}`,
		headers: {
			authtoken: credentials.apiToken,
			'Content-Type': 'application/json',
		},
		json: true,
	};

	const responseData = await this.helpers.httpRequest(options);
	return [{ json: responseData as IDataObject }];
}

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const ticketId = this.getNodeParameter('ticketId', index) as string;

	const subject = this.getNodeParameter('subject', index) as string;
	const department = this.getNodeParameter('department', index) as string;
	const contactid = this.getNodeParameter('contactid', index) as string;
	const userid = this.getNodeParameter('userid', index) as string;
	const priority = this.getNodeParameter('priority', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		subject,
		department,
		contactid,
		userid,
		priority,
	};

	if (additionalFields.project_id) {
		body.project_id = additionalFields.project_id;
	}
	if (additionalFields.message) {
		body.message = additionalFields.message;
	}
	if (additionalFields.service) {
		body.service = additionalFields.service;
	}
	if (additionalFields.assigned) {
		body.assigned = additionalFields.assigned;
	}
	if (additionalFields.tags) {
		body.tags = additionalFields.tags;
	}

	const options = {
		method: 'PUT' as IHttpRequestMethods,
		url: `${baseUrl}/api/tickets/${ticketId}`,
		headers: {
			authtoken: credentials.apiToken,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	};

	const responseData = await this.helpers.httpRequest(options);
	return [{ json: responseData as IDataObject }];
}
