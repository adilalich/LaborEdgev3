module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/countries',
    },
    canPaginate: true,
    sample: { id: 244, name: 'Canada', code: 'CAN' },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'name' },
      { key: 'code' },
    ],
  },
  key: 'list_countries',
  noun: 'Country',
  display: {
    label: 'List Coutries',
    description: 'List Countries which will be used in dynamic dropdown',
    hidden: true,
  },
};
