module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/referralsources',
    },
    canPaginate: true,
    sample: { id: 3674, name: 'Axis Call In', active: true },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'name' },
      { key: 'active', type: 'boolean' },
    ],
  },
  key: 'list_refSource',
  noun: 'Referral',
  display: {
    label: 'List Referral Sources',
    description:
      'List Referral Sources which will be used in dynamic drop-down.',
    hidden: true,
  },
};
