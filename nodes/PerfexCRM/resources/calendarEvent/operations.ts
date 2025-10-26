import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IHttpRequestMethods,
} from 'n8n-workflow';

// Helper function to convert date to MySQL datetime format
function formatDateForAPI(dateInput: string): string {
	const date = new Date(dateInput);
	
	// Check if date is valid
	if (isNaN(date.getTime())) {
		return dateInput;
	}
	
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const title = this.getNodeParameter('title', index) as string;
	const startRaw = this.getNodeParameter('start', index) as string;
	const start = formatDateForAPI(startRaw);
	const reminder_before_type = this.getNodeParameter('reminder_before_type', index) as string;
	const reminder_before = this.getNodeParameter('reminder_before', index) as number;
	const userid = this.getNodeParameter('userid', index) as string;
	const isstartnotified = this.getNodeParameter('isstartnotified', index) as string;
	const publicStatus = this.getNodeParameter('public', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const formParts: string[] = [];
	formParts.push(`title=${encodeURIComponent(title)}`);
	formParts.push(`start=${encodeURIComponent(start)}`);
	formParts.push(`reminder_before_type=${encodeURIComponent(reminder_before_type)}`);
	formParts.push(`reminder_before=${encodeURIComponent(reminder_before)}`);
	formParts.push(`userid=${encodeURIComponent(userid)}`);
	formParts.push(`isstartnotified=${encodeURIComponent(isstartnotified)}`);
	formParts.push(`public=${encodeURIComponent(publicStatus)}`);

	if (additionalFields.description) {
		formParts.push(`description=${encodeURIComponent(additionalFields.description as string)}`);
	}
	if (additionalFields.color) {
		formParts.push(`color=${encodeURIComponent(additionalFields.color as string)}`);
	}

	const formBody = formParts.join('&');

	const options = {
		method: 'POST' as IHttpRequestMethods,
		url: `${baseUrl}/api/calendar`,
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
	const eventId = this.getNodeParameter('eventId', index) as string;

	const options = {
		method: 'DELETE' as IHttpRequestMethods,
		url: `${baseUrl}/api/calendar/${eventId}`,
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
	const eventId = this.getNodeParameter('eventId', index) as string;

	const options = {
		method: 'GET' as IHttpRequestMethods,
		url: `${baseUrl}/api/calendar/${eventId}`,
		headers: {
			authtoken: credentials.apiToken,
			'Content-Type': 'application/json',
		},
		json: true,
	};

	const responseData = await this.helpers.httpRequest(options);
	return [{ json: responseData as IDataObject }];
}

export async function getAll(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const options = {
		method: 'GET' as IHttpRequestMethods,
		url: `${baseUrl}/api/calendar`,
		headers: {
			authtoken: credentials.apiToken,
			'Content-Type': 'application/json',
		},
		json: true,
	};

	const responseData = await this.helpers.httpRequest(options);
	
	if (Array.isArray(responseData)) {
		return responseData.map((item) => ({ json: item as IDataObject }));
	}
	
	return [{ json: responseData as IDataObject }];
}

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	const eventId = this.getNodeParameter('eventId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {};

	if (updateFields.title) {
		body.title = updateFields.title;
	}
	if (updateFields.description) {
		body.description = updateFields.description;
	}
	if (updateFields.start) {
		body.start = formatDateForAPI(updateFields.start as string);
	}
	if (updateFields.reminder_before_type) {
		body.reminder_before_type = updateFields.reminder_before_type;
	}
	if (updateFields.reminder_before !== undefined) {
		body.reminder_before = updateFields.reminder_before;
	}
	if (updateFields.color) {
		body.color = updateFields.color;
	}
	if (updateFields.userid) {
		body.userid = updateFields.userid;
	}
	if (updateFields.isstartnotified) {
		body.isstartnotified = updateFields.isstartnotified;
	}
	if (updateFields.public) {
		body.public = updateFields.public;
	}

	const options = {
		method: 'PUT' as IHttpRequestMethods,
		url: `${baseUrl}/api/calendar/${eventId}`,
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
