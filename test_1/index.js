"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  let results = [];
  // get the json file
  const test_data = require('./test_data.json');
  // loop through the json adding fields to the results'
  for (let character in test_data) {
    const new_obj = {
      'first_name': test_data[character].first_name,
      'last_name': test_data[character].last_name,
      'catchphrase': test_data[character].catchphrase,
      'example': test_data[character].first_name+' '+test_data[character].last_name+' says '+test_data[character].catchphrase
    };
    results.push(new_obj);
  }

  return results;
};
