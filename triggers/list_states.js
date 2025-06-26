module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/states',
    },
    canPaginate: true,
    sample: { id: 10534, name: 'Alabama', code: 'AL', countryId: 233 },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'name' },
      { key: 'code' },
      { key: 'countryId', type: 'integer' },
    ],
  },
  key: 'list_states',
  noun: 'State',
  display: {
    label: 'List States',
    description: 'List States which will be used in dynamic dropdown',
    hidden: true,
  },
};
