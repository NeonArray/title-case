const test = require('tape');
const titleCase = require('../index.js');

test('throws an error if subject argument is not a string or is of zero length', (t) => {
    t.plan(3);

    t.throws(titleCase);

    try {
        titleCase('');
        t.fail();
    } catch (error) {
        t.pass();
    }

    try {
        titleCase(120);
        t.fail();
    } catch (error) {
        t.pass();
    }
});

test('returns a function', (t) => {
    t.plan(1);

    t.equal(typeof titleCase, 'function');
});

test('formats strings with all uppercase input', (t) => {
    t.plan(1);

    const expected = "Jurassic Park";
    const actual = "Jurassic Park";

    t.equal(titleCase(actual), expected);
});

test('preposition handling', (t) => {
    t.plan(1);

    const expected = "The Lord of The Rings";
    const actual = titleCase("THE LORD OF THE RINGS");

    t.equal(actual, expected);
});

test('special characters', (t) => {
    t.plan(2);

    const expected = "Star Wars: A New Hope";
    const actual = titleCase("star wars: a new hope");

    t.equal(actual, expected);

    const expected2 = "Bill & Ted's Excellent Adventure";
    const actual2 = titleCase("bill & ted's excellent adventure");

    t.equal(actual2, expected2);
});
