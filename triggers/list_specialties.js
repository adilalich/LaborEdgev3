module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/specialties',
    },
    canPaginate: true,
    sample: { id: 43834, name: 'Acute Care', active: true, professionId: 9983 },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'name' },
      { key: 'active' },
      { key: 'professionId', type: 'integer' },
    ],
  },
  key: 'list_specialties',
  noun: 'Speciality',
  display: {
    label: 'List specialties',
    description: 'List specialties which will be used in drop down.',
    hidden: true,
  },
};
