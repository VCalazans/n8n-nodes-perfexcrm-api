import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const task_id = this.getNodeParameter('task_id', index) as number;
	const start_time = this.getNodeParameter('start_time', index) as string;
	const end_time = this.getNodeParameter('end_time', index) as string;
	const staff_id = this.getNodeParameter('staff_id', index) as number;
	const hourly_rate = this.getNodeParameter('hourly_rate', index) as number;
	const note = this.getNodeParameter('note', index, '') as string;

	const formParts: string[] = [];
	formParts.push(`task_id=${encodeURIComponent(task_id)}`);
	formParts.push(`start_time=${encodeURIComponent(start_time)}`);
	formParts.push(`end_time=${encodeURIComponent(end_time)}`);
	formParts.push(`staff_id=${encodeURIComponent(staff_id)}`);
	formParts.push(`hourly_rate=${encodeURIComponent(hourly_rate)}`);
	
	if (note) {
		formParts.push(`note=${encodeURIComponent(note)}`);
	}

	const formBody = formParts.join('&');

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/timesheets`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: formBody,
	});

	return [{ json: response, pairedItem: { item: index } }];
}

export async function del(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const timesheetId = this.getNodeParameter('timesheetId', index) as number;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/timesheets/${timesheetId}`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	return [{ json: response, pairedItem: { item: index } }];
}

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const timesheetId = this.getNodeParameter('timesheetId', index) as number;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/timesheets/${timesheetId}`,
		headers: {
			'authtoken': credentials.apiToken as string,
		},
	});

	return [{ json: response, pairedItem: { item: index } }];
}

export async function getAll(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/timesheets`,
		headers: {
			'authtoken': credentials.apiToken as string,
		},
	});

	const returnData: INodeExecutionData[] = [];
	
	if (Array.isArray(response)) {
		response.forEach(item => {
			returnData.push({
				json: item,
				pairedItem: { item: index },
			});
		});
	} else {
		returnData.push({
			json: response,
			pairedItem: { item: index },
		});
	}

	return returnData;
}

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;
	
	const timesheetId = this.getNodeParameter('timesheetId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as {
		task_id?: number;
		start_time?: string;
		end_time?: string;
		staff_id?: number;
		hourly_rate?: number;
		note?: string;
	};

	const formParts: string[] = [];

	if (updateFields.task_id !== undefined) {
		formParts.push(`task_id=${encodeURIComponent(updateFields.task_id)}`);
	}
	if (updateFields.start_time) {
		formParts.push(`start_time=${encodeURIComponent(updateFields.start_time)}`);
	}
	if (updateFields.end_time) {
		formParts.push(`end_time=${encodeURIComponent(updateFields.end_time)}`);
	}
	if (updateFields.staff_id !== undefined) {
		formParts.push(`staff_id=${encodeURIComponent(updateFields.staff_id)}`);
	}
	if (updateFields.hourly_rate !== undefined) {
		formParts.push(`hourly_rate=${encodeURIComponent(updateFields.hourly_rate)}`);
	}
	if (updateFields.note) {
		formParts.push(`note=${encodeURIComponent(updateFields.note)}`);
	}

	const formBody = formParts.join('&');

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/timesheets/${timesheetId}`,
		headers: {
			'authtoken': credentials.apiToken as string,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: formBody,
	});

	return [{ json: response, pairedItem: { item: index } }];
}
