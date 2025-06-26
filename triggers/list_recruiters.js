module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/recruiters',
    },
    canPaginate: true,
    sample: {
      id: 821358,
      name: 'Adam McKinnon',
      active: true,
      email: 'adamm@axismedicalstaffing.com',
    },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'name' },
      { key: 'active', type: 'boolean' },
      { key: 'email' },
    ],
  },
  key: 'list_recruiters',
  noun: 'Recruiter',
  display: {
    label: 'List Recruiters',
    description: 'List Recruiters which will be used in dynamic dropdown',
    hidden: true,
  },
};
