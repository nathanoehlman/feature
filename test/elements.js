var canvas = require('../element/canvas'),
    test = require('tape');

test('element support test', function(t) {
    t.plan(1);

    t.ok(canvas, 'Browser supports canvas');
});