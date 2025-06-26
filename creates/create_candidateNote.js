const perform = async (z, bundle) => {
    const options = {
      url: `https://api-nexus.laboredge.com:9000/api/api-integration/v1/candidates/${bundle.inputData.candidateId}/journal/activity`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${bundle.authData.access_token}`,
      },
      params: {},
      body: {
        eventType: bundle.inputData.eventType,
        note: bundle.inputData.note,
        logNote: bundle.inputData.logNote,
        noteTypeId: bundle.inputData.noteTypeId
      },
    };
  
    return z.request(options).then((response) => {
      response.throwForStatus();
      const results = response.json;
  
      // You can do any parsing you need for results here before returning them
  
      return results;
    });
  };
  
  module.exports = {
    key: 'create_candidateNote',
    noun: 'Candidate',
    display: {
      label: 'Insert Candidate Note',
      description: 'Inserts Candidate Note in LaborEge.',
      hidden: false,
    },
    operation: {
      inputFields: [
        {
            key: 'candidateId',
            label: 'Candidate',
            type: 'integer',
            required: true,
            list: false,
            altersDynamicFields: false,
        },
        {
          key: 'eventType',
          label: 'Event Type',
          type: 'string',
          required: false,
          list: false,
          altersDynamicFields: false,
        },
        {
          key: 'note',
          label: 'Note',
          type: 'string',
          required: false,
          list: false,
          altersDynamicFields: false,
        },
        {
          key: 'logNote',
          label: 'Log Note',
          type: 'string',
          required: false,
          list: false,
          altersDynamicFields: false,
        },
        {
          key: 'noteTypeId',
          label: 'Note Type',
          type: 'integer',
          dynamic: 'list_journalTypes.id.label',
          required: false,
          list: false,
          altersDynamicFields: false,
        }
      ],
      perform: perform,
    },
  };
  