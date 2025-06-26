const perform = async (z, bundle) => {
    const options = {
        url: 'https://api-nexus.laboredge.com:9000/api/api-integration/v1/master/specialties',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${bundle.authData.access_token}`
          
        },
        params: {
         
        }
      }
  
      return z.request(options)
      .then((response) => {
        response.throwForStatus();
        const results = response.json;
    
        var specialty = bundle.inputData.specialty;
        var professionId = bundle.inputData.professionId;
        
        var matchingSpecialty = results.find(function(specialtyObj) {
          return specialtyObj.name === specialty && specialtyObj.professionId === professionId;
      });
        

        if (matchingSpecialty) {
          return [matchingSpecialty];
        } else {
          return ['Specialty not found in the response.'];
        }
      });
  };
  
  module.exports = {
    key: 'find_specialty',
    noun: 'Specialty',
    display: {
      label: 'Find Candidate Specialty',
      description: 'Finds a Candidate Specialty',
      hidden: false,
    },
    operation: {
      inputFields: [
        {
          key: 'specialty',
          label: 'Specialty',
          type: 'string',
          required: true,
          list: false,
          altersDynamicFields: false,
        },
        {
          key: 'professionId',
          label: 'Profession',
          type: 'integer',
          required: true,
          list: false,
          altersDynamicFields: false,
        }
        
      ],
      perform: perform,
    },
  };
  