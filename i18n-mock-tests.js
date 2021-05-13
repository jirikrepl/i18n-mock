// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest';

// Import and rename a variable exported by i18n-mock.js.
import { name as packageName } from 'meteor/jirikrepl:i18n-mock';

// Write your tests here!
// Here is an example.
Tinytest.add('i18n-mock - example', function (test) {
    test.equal(packageName, 'i18n-mock');
});
