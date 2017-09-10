var consonants = 'bcdfghjklmnpqrstvwxyz';
var vowels = 'aieou';

var getElement = function(array) {
  var length = array.length;
  return array[Math.floor(Math.random() * length)];
};

var capitalize = function(string) {
  return string && string[0].toUpperCase() + string.slice(1);
};

var getRandomChance = function() {
  return Math.floor(Math.random() * 100);
};

var getRandomUpTo = function(n) {
  return Math.floor(Math.random() * n);
};

var getRandomBetween = function(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
};

var randomConsonantVowelPair = function() {
  return getElement(consonants) + getElement(vowels);
};

var makeRandomPrefix = function(weightMap) {
  //convert to consonants and vowels
  if (weightMap === undefined) {

  } else {

  }
};

var createConsonantVowelPattern = function() {
  var length = getRandomBetween(2, 6);
  var possibility = ['consonants', 'vowels'];
  var result = [getElement(possibility)];

  for (var i = 1; i < length; i++) {
    if (result[i - 1] === 'consonants' && result[i - 2] === 'consonants') {
      result.push('vowels');
    } else {
      result.push(getElement(possibility));
    }
  }

  return result;
};

var randomWeightedConsonantVowelPair = function(weightMap) {
  return getWeightedConsonant(weightMap) + getWeightedVowel(weightMap);
};

var memoize = function(func) {
  let cache = {};
  let result;

  return function() {
    let args = JSON.stringify(arguments);
    if (cache[args] === undefined) {
      result = func.apply(this, arguments);
      cache[args] = result;
      return result;
    } else {
      return cache[args];
    }
  };
};

//Expect object with key-pair of letter to weight
var getWeightedConsonant = function(weightMap) {
  var weightedArray = generateWeightedArray(weightMap, consonants);

  return getElement(weightedArray);
};

var getWeightedVowel = function(weightMap) {
  var weightedArray = generateWeightedArray(weightMap, vowels);

  return getElement(weightedArray);
};

var getElementWeighted = function(weightMap, array) {
  var weightedArray = generateWeightedArray(weightMap, array);

  return getElement(weightedArray);
};

var generateWeightedArray = memoize(function(weightMap, array) {
  var weightMap = generateWeightMap(weightMap, array);
  var weightedArray = [];

  //For each element in the array, push it (weighted) amount times
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < weightMap[i]; j++) {
      weightedArray.push(array[i]);
    }
  }

  return weightedArray;
});

//Gets the weight of an element which wasn't specified
var getUnweightedChance = function (weightMap, array) {
  var numEles = 0;
  var totalWeight = 0;

  for (var key in weightMap) {
    totalWeight += weightMap[key];
    numEles++;
  }

  //Could correct individual weights to adjust down to 100% here
  if (totalWeight > 100) {
    totalWeight = 100;
  }
  return Math.floor((100-totalWeight)/(array.length-numEles));
};

var generateWeightMap = function(mapped, array) {
  var otherChance = getUnweightedChance(mapped, array);
  var result = [];
  var chance;
  for (var ele of array) {
    chance = mapped[ele] || otherChance;
    result.push(chance)
  }
  return result;
};

var getGibberishName = function() {

};
