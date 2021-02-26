import logo from './logo.svg';
import './App.css';
const _ = require('lodash');

const findUsers = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

var sortUsers = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

function Lodash() {
  //find
  console.log('find L', _.find(findUsers, { age: 1, active: true })); //lodash
  console.log(
    'find G',
    findUsers.find((user) => user.age === 1 && user.active)
  ); //normal javascript
  // => object for 'pebbles'

  // The `_.property` iteratee shorthand.
  console.log('find L', _.find(findUsers, { active: false })); //lodash
  console.log(
    'find G',
    findUsers.find((user) => !user.active)
  ); //normal javascript
  // => object for 'fred'
  console.log('find L', _.find(findUsers, 'active')); //lodash
  console.log(
    'find G',
    findUsers.find((user) => user.active)
  ); //normal javascript
  // => object for 'barney'

  //SortBy
  console.log(
    'Sort L',
    _.sortBy(sortUsers, (o) => o.user)
  );
  console.log('Sort L', _.sortBy(sortUsers, 'user'));
  // => objects for [{user: "barney", age: 36}, {user: "barney", age: 34}, {user: "fred", age: 48}, {user: "fred", age: 40}]

  console.log('Sort L', _.sortBy(_.sortBy(sortUsers, 'user'), 'age'));
  console.log('Sort L', _.sortBy(sortUsers, ['user', 'age']));
  // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

  //forEach
  //Array
  console.log('forEach Array');
  _.forEach([1, 2], (value) => {
    console.log(value);
  });
  // => Logs `1` then `2`.
  _.forEach([1, 2], function (value, index) {
    console.log(index);
  });
  // => Logs `0` then `1`.

  //Object
  console.log('forEach Object');
  _.forEach({ a: 1, b: 2 }, (value, key) => {
    console.log(key);
  });
  // => Logs 'a' then 'b' (iteration order is not guaranteed).
  _.forEach({ a: 1, b: 2 }, function (value, key) {
    console.log(value);
  });
  // => Logs '1' then '2'

  function square(n) {
    return n * n;
  }

  console.log('map L Array', _.map([4, 8], square));
  console.log(
    'map G',
    [4, 8].map((item) => square(item))
  );
  // => [16, 64]

  console.log('map L Object', _.map({ a: 4, b: 8 }, square)); //{ a: 4, b: 8 } can use lodash but normal javascript can not use map
  // => [16, 64] (iteration order is not guaranteed)

  const mapUsers = [{ user: 'barney' }, { user: 'fred' }];
  // The `_.property` iteratee shorthand.
  console.log('map L Object', _.map(mapUsers, 'user'));
  // => ['barney', 'fred']

  var filterUsers = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
  ];

  console.log(
    'filter L',
    _.filter(filterUsers, (o) => !o.active)
  );
  console.log(
    'filter G',
    filterUsers.filter((item) => !item.active)
  );
  // => objects for ['fred']

  // The `_.matches` iteratee shorthand.
  console.log('filter L', _.filter(filterUsers, { age: 36, active: true }));
  console.log(
    'filter G',
    filterUsers.filter((item) => item.age === 36 && item.active)
  );
  // => objects for ['barney']

  // The `_.matchesProperty` iteratee shorthand.
  console.log('filter L', _.filter(filterUsers, ['active', false]));
  console.log(
    'filter G',
    filterUsers.filter((item) => !item.active)
  );
  // => objects for ['fred']

  // The `_.property` iteratee shorthand.
  console.log('filter L', _.filter(filterUsers, 'active'));
  console.log(
    'filter G',
    filterUsers.filter((item) => item.active)
  );
  // => objects for ['barney']

  console.log(
    'reduce L Array',
    _.reduce(
      [1, 2],
      function (sum, n) {
        return sum + n;
      },
      0
    )
  );
  // => 3

  console.log(
    'reduce L Object',
    _.reduce(
      { a: 1, b: 2, c: 1 },
      function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    )
  );
  // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

  console.log('raw Array', [0, 1, false, 2, '', 3]);
  console.log('compact L', _.compact([0, 1, false, 2, '', 3]));
  // => [1, 2, 3]

  console.log(_.uniqueId('contact_'));
  console.log(_.uniqueId('contact_'));
  // => 'contact_104'

  console.log(_.uniqueId());
  // => '105'
  return (
    <div className="App">
      <header className="App-header">
        <p>Test lodash in console.log</p>
      </header>
    </div>
  );
}

export default Lodash;
