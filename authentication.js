const testAuth = async (z, bundle) => {
  const options = {
    url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/specialties',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  type: 'session',
  test: testAuth,
  fields: [
    {
      computed: false,
      key: 'username',
      required: true,
      label: 'username',
      type: 'string',
    },
    { computed: false, key: 'password', required: true, label: 'password' },
    {
      computed: false,
      key: 'client_id',
      required: true,
      label: 'Client ID',
      type: 'string',
    },
    {
      computed: false,
      key: 'organizationCode',
      required: false,
      label: 'Organization Code',
    },
    { computed: true, key: 'access_token', required: false, type: 'string' },
    {
      computed: false,
      key: 'auth_key',
      required: false,
      label: 'Authorization Header',
      type: 'string',
    },
  ],
  sessionConfig: {
    perform: {
      source:
        "const options = {\n  url: 'https://api-nexus.laboredge.com:9000/api/secured/oauth/token',\n  method: 'POST',\n  headers: {\n    'content-type': 'application/x-www-form-urlencoded',\n    'accept': 'application/json',\n    'Authorization': `Basic ${bundle.authData.auth_key}`\n  },\n  params: {\n\n  },\n  body: {\n    'username': bundle.authData.username,\n    'password': bundle.authData.password,\n    'client_id': bundle.authData.client_id,\n    'grant_type': 'password',\n    'organizationCode': bundle.authData.organizationCode\n  }\n}\n\nreturn z.request(options)\n  .then((response) => {\n    response.throwForStatus();\n    const results = response.json;\n\n    // You can do any parsing you need for results here before returning them\n\n    return {\n      'sessionKey': results.sessionKey,\n      'access_token': results.access_token\n    };\n  });",
    },
  },
};
