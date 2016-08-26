var test = require('tape');
var bool = require('../index.js');

test('Test true-bool module.', function(t) {
    t.plan(20);
    t.false(bool(false), 'false converted to false.');
    t.false(bool(null), 'null converted to false.');
    t.false(bool(undefined), 'undefined converted to false.');
    t.false(bool(''), 'empty string converted to false.');
    t.false(bool(0), '0 converted to false.');
    t.false(bool(-0), '-0 converted to false.');
    t.false(bool(+0), '+0 converted to false.');
    t.false(bool([]), 'empty Array converted to false.');
    t.false(bool({}), 'empty Object converted to false.');
    t.false(bool(NaN), 'NaN converted to false.');
    t.false(bool(new Map()), 'empty Map converted to false.');
    t.false(bool(new Set()), 'empty Set converted to false.');
    t.true(bool(true), 'true converted to true.');
    t.true(bool('foo'), 'non-empty string converted to true.');
    t.true(bool(1), 'non-zero number converted to true.');
    t.true(bool(-1), 'negative non-zero number converted to true.');
    t.true(bool([1,2,3]), 'non-empty Array converted to true.');
    t.true(bool({'foo': 'bar'}), 'non-empty Object converted to true.');
    t.true(bool(new Map([['foo', 'bar']])), 'non-empty Map converted to true.');
    t.true(bool(new Set([1,2,3])), 'non-empty Set converted to true.');
});
