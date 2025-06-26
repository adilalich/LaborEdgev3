const authentication = require('./authentication');
const listProfessionsTrigger = require('./triggers/list_professions.js');
const listSpecialtiesTrigger = require('./triggers/list_specialties.js');
const listStatesTrigger = require('./triggers/list_states.js');
const listCountriesTrigger = require('./triggers/list_countries.js');
const listCandidatesStatusesTrigger = require('./triggers/list_candidates_statuses.js');
const listRefSourceTrigger = require('./triggers/list_ref_source.js');
const listRecruitersTrigger = require('./triggers/list_recruiters.js');
const listCandidateTypesTrigger = require('./triggers/list_candidate_types.js');
const listDocTypeTrigger = require('./triggers/list_doc_type.js');
const listJournalTypesTrigger = require ('./triggers/list_journalTypes.js');
const createCandidateCreate = require('./creates/create_candidate.js');
const createCandidateNote = require('./creates/create_candidateNote.js')
const uploadCandidateDocCreate = require('./creates/upload_candidate_doc.js');
const findCandidateSearch = require('./creates/find_candidate.js')
const findSpecialtySearch = require('./creates/find_specialty.js') 
const hydrators = require('./hydrators');


const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [
  ],

  afterResponse: [
  ],

  // Any hydrators go here
  hydrators: hydrators,

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
  },

  // If you want your triggers to show up, you better include it here!
  triggers: {
    [listProfessionsTrigger.key]: listProfessionsTrigger,
    [listSpecialtiesTrigger.key]: listSpecialtiesTrigger,
    [listStatesTrigger.key]: listStatesTrigger,
    [listCountriesTrigger.key]: listCountriesTrigger,
    [listCandidatesStatusesTrigger.key]: listCandidatesStatusesTrigger,
    [listRefSourceTrigger.key]: listRefSourceTrigger,
    [listRecruitersTrigger.key]: listRecruitersTrigger,
    [listCandidateTypesTrigger.key]: listCandidateTypesTrigger,
    [listDocTypeTrigger.key]: listDocTypeTrigger,
    [listJournalTypesTrigger.key]:listJournalTypesTrigger
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [findCandidateSearch.key]: findCandidateSearch,
    [findSpecialtySearch.key]: findSpecialtySearch
  },
  searchOrCreates: {
    [findCandidateSearch.key]: {
      // The key must match the search
      key: findCandidateSearch.key, // same as above
      display: {
        // The label shows up when the search-or-create checkbox is checked.
        // See https://cdn.zappy.app/5fc31d104c6bd0050c44510557b3b98f.png
        label: 'Find or Create a Candidate',
        description: 'Find a candidate by email/phone. Create Candidate if not found.', // this is ignored
      },
      search: findCandidateSearch.key,
      create: createCandidateCreate.key,
    },
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [createCandidateCreate.key]: createCandidateCreate,
    [uploadCandidateDocCreate.key]: uploadCandidateDocCreate,
    [createCandidateNote.key]:createCandidateNote
  }
};

module.exports = App;
