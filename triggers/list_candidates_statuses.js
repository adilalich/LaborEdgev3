module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/candidatestatuses',
    },
    canPaginate: true,
    sample: {
      id: 3023,
      name: 'On Assignment',
      active: true,
      code: 'ACTIVE',
      module: 'CANDIDATE',
    },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'name' },
      { key: 'active', type: 'boolean' },
      { key: 'code' },
      { key: 'module' },
    ],
  },
  key: 'list_candidatesStatuses',
  noun: 'Status',
  display: {
    label: 'List Candidate Statuses',
    description: 'List Candidate Statuses which be used in dynamic dropdown',
    hidden: true,
  },
};
