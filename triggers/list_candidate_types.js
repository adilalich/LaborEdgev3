const perform = async (z, bundle) => {
  const options = {
    url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/candidatetypes',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const data = response.json;
    const renamedData = data.map(({ value, ...rest }) => ({
      id: value,
      ...rest,
    }));

    return renamedData;
  });
};

module.exports = {
  operation: {
    perform: perform,
    canPaginate: true,
    sample: { id: 642, label: 'Test Candidate' },
    outputFields: [{ key: 'id', type: 'integer' }, { key: 'label' }],
  },
  key: 'list_candidateTypes',
  noun: 'Candidate',
  display: {
    label: 'List Candidate Types',
    description: 'List Candidate Types which will be used in dynamic dropdown',
    hidden: true,
  },
};
