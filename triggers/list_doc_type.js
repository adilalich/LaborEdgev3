const perform = async (z, bundle) => {
  const options = {
    url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/documenttypes',
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
    sample: { id: 7429, label: 'AMS Credentialing' },
    outputFields: [{ key: 'id', type: 'integer' }, { key: 'label' }],
  },
  display: {
    description: 'List Document Type which will be used in dynamic dropdown',
    hidden: true,
    label: 'List Document Type',
  },
  key: 'list_doc_type',
  noun: 'Document',
};
