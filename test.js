var _ = require('underscore');
var contextual = require('./lib/main');
var fixture = {
  test: 'test'
};

var foo = {}, bar = {};
contextual(foo, bar).test = 'test';


if (!_.isEqual(foo, fixture)) {
  throw new Error('foo is not fixture');
  process.exit(1);
} else if (!_.isEqual(bar, fixture)) {
  throw new Error('bar is not fixture');
  process.exit(1);
} else {
  process.stdout.write('Done');
  process.exit(0);
}
