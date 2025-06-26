module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/professions',
    },
    canPaginate: true,
    sample: { id: 10263, name: 'Acute Care', active: true },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'name' },
      { key: 'active' },
    ],
  },
  key: 'list_professions',
  noun: 'Profession',
  display: {
    label: 'List Professions',
    description: 'List Professions which will be used in dynamic drop-down',
    hidden: true,
  },
};
