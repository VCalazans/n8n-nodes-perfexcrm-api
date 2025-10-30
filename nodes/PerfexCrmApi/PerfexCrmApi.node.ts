import {
	type INodeType,
	type INodeTypeDescription,
	type IExecuteFunctions,
	type INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { leadDescription } from './resources/lead/description';
import * as leadOperations from './resources/lead/operations';
import { customerOperations, customerFields } from './resources/customer/description';
import * as customerOps from './resources/customer/operations';
import { itemOperations, itemFields } from './resources/item/description';
import * as itemOps from './resources/item/operations';
import { subscriptionOperations, subscriptionFields } from './resources/subscription/description';
import * as subscriptionOps from './resources/subscription/operations';
import { taskOperations, taskFields } from './resources/task/description';
import * as taskOps from './resources/task/operations';
import { ticketOperations, ticketFields, ticketOps } from './resources/ticket';
import { calendarEventOperations, calendarEventFields, calendarEventOps } from './resources/calendarEvent';
import { timesheetOperations, timesheetFields, timesheetOps } from './resources/timesheet';

export class PerfexCrmApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Perfex CRM API',
		name: 'perfexCrmApi',
		icon: 'file:perfexcrm.svg',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume data from PerfexCRM API',
		defaults: {
			name: 'Perfex CRM API',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'perfexCrmApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}/api',
			headers: {
				'authtoken': '={{$credentials.apiToken}}',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Calendar Event',
						value: 'calendarEvent',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Item',
						value: 'item',
					},
					{
						name: 'Lead',
						value: 'lead',
					},
					{
						name: 'Subscription',
						value: 'subscription',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Ticket',
						value: 'ticket',
					},
					{
						name: 'Timesheet',
						value: 'timesheet',
					},
				],
				default: 'customer',
			},
			...calendarEventOperations,
			...calendarEventFields,
			...customerOperations,
			...customerFields,
			...itemOperations,
			...itemFields,
			...leadDescription,
			...subscriptionOperations,
			...subscriptionFields,
			...taskOperations,
			...taskFields,
			...ticketOperations,
			...ticketFields,
			...timesheetOperations,
			...timesheetFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'calendarEvent') {
					switch (operation) {
						case 'create':
							returnData.push(...await calendarEventOps.create.call(this, i));
							break;
						case 'delete':
							returnData.push(...await calendarEventOps.del.call(this, i));
							break;
						case 'get':
							returnData.push(...await calendarEventOps.get.call(this, i));
							break;
						case 'getAll':
							returnData.push(...await calendarEventOps.getAll.call(this));
							break;
						case 'update':
							returnData.push(...await calendarEventOps.update.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else if (resource === 'customer') {
					switch (operation) {
						case 'create':
							returnData.push(...await customerOps.createCustomer.call(this, i));
							break;
						case 'delete':
							returnData.push(...await customerOps.deleteCustomer.call(this, i));
							break;
						case 'get':
							returnData.push(...await customerOps.getCustomer.call(this, i));
							break;
						case 'getAll':
							returnData.push(...await customerOps.getAllCustomers.call(this));
							break;
						case 'update':
							returnData.push(...await customerOps.updateCustomer.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else if (resource === 'item') {
					switch (operation) {
						case 'get':
							returnData.push(...await itemOps.getItem.call(this, i));
							break;
						case 'search':
							returnData.push(...await itemOps.searchItems.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else if (resource === 'lead') {
					switch (operation) {
						case 'create':
							returnData.push(...await leadOperations.create.call(this, i));
							break;
						case 'delete':
							returnData.push(...await leadOperations.del.call(this, i));
							break;
						case 'get':
							returnData.push(...await leadOperations.get.call(this, i));
							break;
						case 'getAll':
							returnData.push(...await leadOperations.getAll.call(this));
							break;
						case 'search':
							returnData.push(...await leadOperations.search.call(this, i));
							break;
						case 'update':
							returnData.push(...await leadOperations.update.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else if (resource === 'subscription') {
					switch (operation) {
						case 'create':
							returnData.push(...await subscriptionOps.createSubscription.call(this, i));
							break;
						case 'delete':
							returnData.push(...await subscriptionOps.deleteSubscription.call(this, i));
							break;
						case 'get':
							returnData.push(...await subscriptionOps.getSubscription.call(this, i));
							break;
						case 'getAll':
							returnData.push(...await subscriptionOps.getAllSubscriptions.call(this));
							break;
						case 'update':
							returnData.push(...await subscriptionOps.updateSubscription.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else if (resource === 'task') {
					switch (operation) {
						case 'create':
							returnData.push(...await taskOps.create.call(this, i));
							break;
						case 'delete':
							returnData.push(...await taskOps.del.call(this, i));
							break;
						case 'get':
							returnData.push(...await taskOps.get.call(this, i));
							break;
						case 'search':
							returnData.push(...await taskOps.search.call(this, i));
							break;
						case 'update':
							returnData.push(...await taskOps.update.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else if (resource === 'ticket') {
					switch (operation) {
						case 'create':
							returnData.push(...await ticketOps.create.call(this, i));
							break;
						case 'delete':
							returnData.push(...await ticketOps.del.call(this, i));
							break;
						case 'get':
							returnData.push(...await ticketOps.get.call(this, i));
							break;
						case 'search':
							returnData.push(...await ticketOps.search.call(this, i));
							break;
						case 'update':
							returnData.push(...await ticketOps.update.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else if (resource === 'timesheet') {
					switch (operation) {
						case 'create':
							returnData.push(...await timesheetOps.create.call(this, i));
							break;
						case 'delete':
							returnData.push(...await timesheetOps.del.call(this, i));
							break;
						case 'get':
							returnData.push(...await timesheetOps.get.call(this, i));
							break;
						case 'getAll':
							returnData.push(...await timesheetOps.getAll.call(this, i));
							break;
						case 'update':
							returnData.push(...await timesheetOps.update.call(this, i));
							break;
						default:
							throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not known!`);
					}
				} else {
					throw new NodeOperationError(this.getNode(), `The resource "${resource}" is not known!`);
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						error: error.message,
						json: {},
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}

export default PerfexCrmApi;
