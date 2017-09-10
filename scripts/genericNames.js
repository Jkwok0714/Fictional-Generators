var englishNamesM = ['John', 'Jack', 'Rich', 'Rick', 'Frank', 'Dave', 'Rob', 'Bill', 'Tom', 'Mark', 'James', 'Michael', 'Ben', 'Raymond',
  'Dennis', 'Tyler', 'Henry', 'Joseph', 'Thomas', 'Donald', 'Anthony', 'Paul', 'Edward', 'Ronald', 'Harry'];
var englishNamesF = ['Mary', 'Karen', 'Nancy', 'Betty', 'Helen', 'Sharon', 'Amy', 'Lulu', 'Ruth', 'Nicole', 'Janet', 'Samantha', 'Joyce',
  'Jennifer', 'Victoria', 'Lauren', 'Alice', 'Rebecca', 'Laura', 'Christina', 'Evelyn', 'Grace', 'Hannah', 'Olivia'];

var makeGenericFirstName = function(gender) {
  if (gender === 'M') {
    return getElement(englishNamesM);
  } else if (gender === 'F') {
    return getElement(englishNamesF);
  } else {
    if (getRandomChance() < 50) {
      return getElement(englishNamesM);
    } else {
      return getElement(englishNamesF);
    }
  }
}
