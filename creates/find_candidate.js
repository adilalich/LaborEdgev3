const perform = async (z, bundle) => {
    const options = {
      url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/candidates/search',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${bundle.authData.access_token}`,
      },
      params: {},
      body: {
        email: bundle.inputData.email,
        phone: bundle.inputData.phone,
        "pagingSortingDetails":{
          "start":0,
          "maxRowsToFetch": 100
      }
      },
    };
  
    return z.request(options).then((response) => {
      response.throwForStatus();
      const results = response.json;
    
      if (results.count === null && results.records === null) {
        
        return results.records = [];
      } else {
        return results.records;
      }
    });
  };
  
  module.exports = {
    key: 'find_candidate',
    noun: 'Candidate',
    display: {
      label: 'Find Candidate by Email/Phone',
      description: 'Finds a Candidate in LaborEge using Phone or Email',
      hidden: false,
    },
    operation: {
      inputFields: [
        {
          key: 'email',
          label: 'Email',
          type: 'string',
          required: false,
          list: false,
          altersDynamicFields: false,
        },
        {
          key: 'phone',
          label: 'Home Phone',
          type: 'string',
          required: false,
          list: false,
          altersDynamicFields: false,
        },
        
      ],
      perform: perform,
    },
  };
  