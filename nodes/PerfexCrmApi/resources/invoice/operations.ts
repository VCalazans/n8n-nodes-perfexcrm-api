import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('perfexCrmApi');
	const baseUrl = credentials.baseUrl as string;

	// Get required fields
	const clientid = this.getNodeParameter('clientid', index) as number;
	const number = this.getNodeParameter('number', index) as number;
	const date = this.getNodeParameter('date', index) as string;
	const currency = this.getNodeParameter('currency', index) as number;
	const newitemsJson = this.getNodeParameter('newitems', index) as string;
	const subtotal = this.getNodeParameter('subtotal', index) as number;
	const total = this.getNodeParameter('total', index) as number;
	const billing_street = this.getNodeParameter('billing_street', index) as string;
	const allowed_payment_modesJson = this.getNodeParameter('allowed_payment_modes', index) as string;

	// Parse JSON arrays
	let newitems;
	try {
		newitems = JSON.parse(newitemsJson);
	} catch {
		throw new Error('Invalid JSON format for newitems');
	}

	let allowed_payment_modes;
	try {
		allowed_payment_modes = JSON.parse(allowed_payment_modesJson);
	} catch {
		throw new Error('Invalid JSON format for allowed_payment_modes');
	}

	// Get additional fields
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	// Parse removed_items JSON if provided
	if (additionalFields.removed_items) {
		try {
			additionalFields.removed_items = JSON.parse(additionalFields.removed_items as string);
		} catch {
			throw new Error('Invalid JSON format for removed_items');
		}
	}

	const body: IDataObject = {
		clientid,
		number,
		date,
		currency,
		newitems,
		subtotal,
		total,
		billing_street,
		allowed_payment_modes,
		...additionalFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'POST',
		url: `${baseUrl}/api/invoices`,
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

	const invoiceId = this.getNodeParameter('invoiceId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'DELETE',
		url: `${baseUrl}/api/invoices/${invoiceId}`,
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

	const invoiceId = this.getNodeParameter('invoiceId', index) as string;

	const response = await this.helpers.httpRequest({
		method: 'GET',
		url: `${baseUrl}/api/invoices/${invoiceId}`,
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
		url: `${baseUrl}/api/invoices/search/${query}`,
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

	const invoiceId = this.getNodeParameter('invoiceId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	// Parse JSON arrays if provided
	if (updateFields.newitems) {
		try {
			updateFields.newitems = JSON.parse(updateFields.newitems as string);
		} catch {
			throw new Error('Invalid JSON format for newitems');
		}
	}

	if (updateFields.items) {
		try {
			updateFields.items = JSON.parse(updateFields.items as string);
		} catch {
			throw new Error('Invalid JSON format for items');
		}
	}

	if (updateFields.removed_items) {
		try {
			updateFields.removed_items = JSON.parse(updateFields.removed_items as string);
		} catch {
			throw new Error('Invalid JSON format for removed_items');
		}
	}

	if (updateFields.allowed_payment_modes) {
		try {
			updateFields.allowed_payment_modes = JSON.parse(updateFields.allowed_payment_modes as string);
		} catch {
			throw new Error('Invalid JSON format for allowed_payment_modes');
		}
	}

	const body: IDataObject = {
		...updateFields,
	};

	const response = await this.helpers.httpRequest({
		method: 'PUT',
		url: `${baseUrl}/api/invoices/${invoiceId}`,
		headers: {
			authtoken: credentials.apiToken as string,
			'Content-Type': 'application/json',
		},
		body,
		json: true,
	});

	return [{ json: response }];
}
