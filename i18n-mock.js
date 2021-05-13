import I18N from 'meteor/ostrio:i18n';
import SimpleSchema from 'simpl-schema';
import sinon from 'sinon';

// Variables exported by this module can be imported by other packages and
// applications. See i18n-mock-tests.js for an example of importing.
export const name = 'i18n-mock';

sinon.stub(I18N.prototype, 'get').callsFake((x) => x);
sinon.stub(SimpleSchema, 'setDefaultMessages');
