require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - upload_candidate_doc', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        client_id: process.env.CLIENT_ID,
        organizationCode: process.env.ORGANIZATION_CODE,
        access_token: process.env.ACCESS_TOKEN,
        auth_key: process.env.AUTH_KEY,
        oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
        oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
        oauth_token: process.env.OAUTH_TOKEN,
        oauth_token_secret: process.env.OAUTH_TOKEN_SECRET,
      },

      inputData: {},
    };

    const result = await appTester(
      App.creates['upload_candidate_doc'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
