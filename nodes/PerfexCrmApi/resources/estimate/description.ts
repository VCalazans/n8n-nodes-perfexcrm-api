import type { INodeProperties } from 'n8n-workflow';

export const estimateOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['estimate'],
      },
    },
    options: [
      { name: 'Create', value: 'create', description: 'Create an estimate', action: 'Create an estimate' },
      { name: 'Delete', value: 'delete', description: 'Delete an estimate', action: 'Delete an estimate' },
  { name: 'Get', value: 'get', description: 'Get an estimate', action: 'Get an estimate' },
  { name: 'Get Many', value: 'getAll', description: 'Get many estimates', action: 'Get many estimates' },
      { name: 'Search', value: 'search', description: 'Search estimates', action: 'Search estimates' },
      { name: 'Update', value: 'update', description: 'Update an estimate', action: 'Update an estimate' },
    ],
    default: 'create',
  },
];

export const estimateFields: INodeProperties[] = [
  // -----------------------------
  // estimate:create
  // -----------------------------
  {
    displayName: 'Client ID',
    name: 'clientid',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: 0,
    description: 'Customer id',
  },
  {
    displayName: 'Number',
    name: 'number',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: 1,
    description: 'Estimate number',
  },
  {
    displayName: 'Date',
    name: 'date',
    type: 'dateTime',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: '',
    description: 'Estimate date',
  },
  {
    displayName: 'Due Date',
    name: 'duedate',
    type: 'dateTime',
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: '',
    description: 'Expiry date of estimate',
  },
  {
    displayName: 'Currency',
    name: 'currency',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: 0,
  },
  {
    displayName: 'New Items (JSON)',
    name: 'newitems',
    type: 'string',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: '[]',
    description: 'JSON array of new items',
  },
  {
    displayName: 'Subtotal',
    name: 'subtotal',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: 0,
  },
  {
    displayName: 'Total',
    name: 'total',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    default: 0,
  },
  {
    displayName: 'Additional Fields',
    name: 'additionalFields',
    type: 'collection',
    placeholder: 'Add Field',
    default: {},
    displayOptions: { show: { resource: ['estimate'], operation: ['create'] } },
    options: [
      { displayName: 'Admin Note', name: 'adminnote', type: 'string', default: '' },
      { displayName: 'Billing City', name: 'billing_city', type: 'string', default: '' },
      { displayName: 'Billing Country', name: 'billing_country', type: 'number', default: 0 },
      { displayName: 'Billing State', name: 'billing_state', type: 'string', default: '' },
      { displayName: 'Billing Street', name: 'billing_street', type: 'string', default: '' },
      { displayName: 'Billing Zip', name: 'billing_zip', type: 'string', default: '' },
      { displayName: 'Client Note', name: 'clientnote', type: 'string', default: '' },
      { displayName: 'Reference', name: 'reference', type: 'string', default: '' },
      { displayName: 'Sale Agent', name: 'sale_agent', type: 'number', default: 0 },
      { displayName: 'Shipping City', name: 'shipping_city', type: 'string', default: '' },
      { displayName: 'Shipping Country', name: 'shipping_country', type: 'number', default: 0 },
      { displayName: 'Shipping State', name: 'shipping_state', type: 'string', default: '' },
      { displayName: 'Shipping Street', name: 'shipping_street', type: 'string', default: '' },
      { displayName: 'Shipping Zip', name: 'shipping_zip', type: 'string', default: '' },
      { displayName: 'Status', name: 'status', type: 'number', default: 0 },
      { displayName: 'Tags', name: 'tags', type: 'string', default: '' },
      { displayName: 'Terms', name: 'terms', type: 'string', default: '' },
    ],
  },

  // -----------------------------
  // estimate:delete
  // -----------------------------
  {
    displayName: 'Estimate ID',
    name: 'estimateId',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['delete'] } },
    default: 0,
  },

  // -----------------------------
  // estimate:get
  // -----------------------------
  {
    displayName: 'Estimate ID',
    name: 'estimateId',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['get'] } },
    default: 0,
  },

  // -----------------------------
  // estimate:search
  // -----------------------------
  {
    displayName: 'Search',
    name: 'keysearch',
    type: 'string',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['search'] } },
    default: '',
  },

  // -----------------------------
  // estimate:update
  // -----------------------------
  {
    displayName: 'Estimate ID',
    name: 'estimateId',
    type: 'number',
    required: true,
    displayOptions: { show: { resource: ['estimate'], operation: ['update'] } },
    default: 0,
  },
  {
    displayName: 'Update Fields',
    name: 'updateFields',
    type: 'collection',
    placeholder: 'Add Field',
    default: {},
    displayOptions: { show: { resource: ['estimate'], operation: ['update'] } },
    options: [
      { displayName: 'Admin Note', name: 'adminnote', type: 'string', default: '' },
      { displayName: 'Client ID', name: 'clientid', type: 'number', default: 0 },
      { displayName: 'Client Note', name: 'clientnote', type: 'string', default: '' },
      { displayName: 'Currency', name: 'currency', type: 'number', default: 0 },
      { displayName: 'Date', name: 'date', type: 'dateTime', default: '' },
      { displayName: 'Due Date', name: 'duedate', type: 'dateTime', default: '' },
      { displayName: 'Number', name: 'number', type: 'number', default: 0 },
      { displayName: 'Reference', name: 'reference', type: 'string', default: '' },
      { displayName: 'Sale Agent', name: 'sale_agent', type: 'number', default: 0 },
      { displayName: 'Status', name: 'status', type: 'number', default: 0 },
      { displayName: 'Subtotal', name: 'subtotal', type: 'number', default: 0 },
      { displayName: 'Tags', name: 'tags', type: 'string', default: '' },
      { displayName: 'Terms', name: 'terms', type: 'string', default: '' },
      { displayName: 'Total', name: 'total', type: 'number', default: 0 },
    ],
  },
];
