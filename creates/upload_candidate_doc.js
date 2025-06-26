const request = require('request');
const FormData = require('form-data');

const hydrators = require('../hydrators');

const uploadFile = (z, bundle) => {
  const formData = new FormData();

  formData.append('filename', bundle.inputData.filename);

  // file will in fact be an url where the file data can be downloaded from
  // which we do via a stream created by NPM's request package
  // (form-data doesn't play nicely with z.request)
  formData.append('uploadedDocuments[0].document', request(bundle.inputData.file),{filename: bundle.inputData.filename});
  formData.append('uploadedDocuments[0].documentTypeId', bundle.inputData.documentTypeId);
  formData.append('uploadedDocuments[0].notes', bundle.inputData.document_notes);


 if (bundle.inputData.name) {
    formData.append('name', bundle.inputData.name);
  } 

  return z.request({
      url: `https://api-nexus.laboredge.com:9000/api/api-integration/v1/candidates/${bundle.inputData.candidateId}/candidatedocument`,
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
        Accept: 'application/json',
        Authorization: `Bearer ${bundle.authData.access_token}`,
      },
      body: formData,
    })
    .then((response) => {
      const file = response.json;

      // Make it possible to use the actual uploaded (or online converted)
      // file in a subsequent action. No need to download it now, so again
      // dehydrating like in ../triggers/newFile.js
      file.file = z.dehydrateFile(hydrators.downloadFile, {
        fileId: file.id,
      });

      return file;
    });
};

module.exports = {
  key: 'upload_candidate_doc',
  noun: 'Candidate',
  display: {
    label: 'Upload Candidate Document',
    description: 'Uploads candidate document.',
    hidden: false,
  },
  operation: {
    inputFields: [
     {key: 'name', required: false, type: 'string', label: 'Name', helpText: 'If not defined, the Filename will be copied here.'},
      {key: 'filename', required: false, type: 'string', label: 'Filename'},
      {
        key: 'candidateId',
        label: 'Candidate',
        type: 'integer',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'documentTypeId',
        label: 'Document Type Id',
        type: 'integer',
        dynamic: 'list_doc_type.id.label',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'document_notes',
        label: 'Document Notes',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'file',
        label: 'Document file',
        type: 'file',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: uploadFile,
  }
};