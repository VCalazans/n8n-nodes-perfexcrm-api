import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

export async function create(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
  const credentials = await this.getCredentials('perfexCrmApi');
  const baseUrl = credentials.baseUrl as string;

  const clientid = this.getNodeParameter('clientid', index) as number;
  const number = this.getNodeParameter('number', index) as number;
  const date = this.getNodeParameter('date', index) as string;
  const duedate = this.getNodeParameter('duedate', index) as string;
  const currency = this.getNodeParameter('currency', index) as number;
  const newitemsRaw = this.getNodeParameter('newitems', index) as string;
  const subtotal = this.getNodeParameter('subtotal', index) as number;
  const total = this.getNodeParameter('total', index) as number;
  const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

  let newitems: IDataObject[] = [];
  try {
    newitems = newitemsRaw ? (JSON.parse(newitemsRaw) as IDataObject[]) : [];
  } catch {
    throw new Error('`newitems` must be a valid JSON array');
  }

  const body: IDataObject = {
    clientid,
    number,
    date,
    currency,
    newitems,
    subtotal,
    total,
    ...additionalFields,
  };
  if (duedate) body.duedate = duedate;

  const response = await this.helpers.httpRequest({
    method: 'POST',
    url: `${baseUrl}/api/estimates`,
    headers: {
      authtoken: credentials.apiToken as string,
      'Content-Type': 'application/json',
    },
    body,
    json: true,
  });

  return [ { json: response as IDataObject, pairedItem: { item: index } } ];
}

export async function del(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
  const credentials = await this.getCredentials('perfexCrmApi');
  const baseUrl = credentials.baseUrl as string;

  const estimateId = this.getNodeParameter('estimateId', index) as number;

  const response = await this.helpers.httpRequest({
    method: 'DELETE',
    url: `${baseUrl}/api/estimates/${estimateId}`,
    headers: {
      authtoken: credentials.apiToken as string,
    },
    json: true,
  });

  return [ { json: response as IDataObject, pairedItem: { item: index } } ];
}

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
  const credentials = await this.getCredentials('perfexCrmApi');
  const baseUrl = credentials.baseUrl as string;

  const estimateId = this.getNodeParameter('estimateId', index) as number;

  const response = await this.helpers.httpRequest({
    method: 'GET',
    url: `${baseUrl}/api/estimates/${estimateId}`,
    headers: {
      authtoken: credentials.apiToken as string,
    },
    json: true,
  });

  return [ { json: response as IDataObject, pairedItem: { item: index } } ];
}

export async function getAll(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
  const credentials = await this.getCredentials('perfexCrmApi');
  const baseUrl = credentials.baseUrl as string;

  const response = await this.helpers.httpRequest({
    method: 'GET',
    url: `${baseUrl}/api/estimates`,
    headers: {
      authtoken: credentials.apiToken as string,
    },
    json: true,
  });

  const returnData: INodeExecutionData[] = [];
  if (Array.isArray(response)) {
    response.forEach(item => {
      returnData.push({ json: item, pairedItem: { item: 0 } });
    });
  } else {
    returnData.push({ json: response as IDataObject, pairedItem: { item: 0 } });
  }

  return returnData;
}

export async function search(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
  const credentials = await this.getCredentials('perfexCrmApi');
  const baseUrl = credentials.baseUrl as string;

  const keysearch = this.getNodeParameter('keysearch', index) as string;

  const response = await this.helpers.httpRequest({
    method: 'GET',
    url: `${baseUrl}/api/estimates/search/${encodeURIComponent(keysearch)}`,
    headers: {
      authtoken: credentials.apiToken as string,
    },
    json: true,
  });

  const returnData: INodeExecutionData[] = [];
  if (Array.isArray(response)) {
    response.forEach(item => {
      returnData.push({ json: item, pairedItem: { item: index } });
    });
  } else {
    returnData.push({ json: response as IDataObject, pairedItem: { item: index } });
  }

  return returnData;
}

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
  const credentials = await this.getCredentials('perfexCrmApi');
  const baseUrl = credentials.baseUrl as string;

  const estimateId = this.getNodeParameter('estimateId', index) as number;
  const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

  const body: IDataObject = { ...updateFields };

  const response = await this.helpers.httpRequest({
    method: 'PUT',
    url: `${baseUrl}/api/estimates/${estimateId}`,
    headers: {
      authtoken: credentials.apiToken as string,
      'Content-Type': 'application/json',
    },
    body,
    json: true,
  });

  return [ { json: response as IDataObject, pairedItem: { item: index } } ];
}
