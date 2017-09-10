var adjectives = ['Rocky', 'Broken', 'Flooded', 'Sunken', 'Dark', 'Grim', 'High', 'North', 'South', 'East',
  'West', 'Misty', 'Lost', 'Forgotten', 'Forsaken', 'Frozen', 'Deserted', 'Abandoned'];
var nouns = ['Sword', 'Dagger', 'Dragon', 'Snake', 'Orc', 'Goblin', 'Dwarf', 'Bowman', 'Hiker', 'Miner', 'Sailor', 'Adventurer',
  'Cleric', 'Priest', 'Magi', 'Troll', 'Knight', 'Plebian', 'Ghost', 'Devil', 'Angel', 'Demon', 'Spirit', 'Explorer', 'Spear'];
var locationPrefix = ['Rock', 'Heavens', 'Waters', 'Colds', 'Stone', 'Gold', 'Silver', 'Pearl', 'Bass', 'Bright', 'Dusk', 'Bane',
  'Castle', 'Forest', 'Mire', 'Iron', 'Brooks', 'War', 'Aerils', 'Arbor', 'Harbour', 'Victory', 'Grims', 'Glory', 'Winds', 'Gales'];
var locationSuffix = ['ton', 'ville', 'vale', 'town', 'burg', 'cester', 'don', 'field', 'glen', 'hurst',
  'ling', 'more', 'ness', 'port', 'stead', 'thorpe', 'bury', 'kirk'];
var element = ['Mountain', 'Peaks', 'Meadows', 'Marshes', 'Glacier', 'Wastelands', 'City', 'Town', 'Hamlet', 'Rivers',
  'Caves', 'Forest', 'Falls', 'Island', 'Lake', 'Lakes', 'Valley', 'Field', 'Keep', 'Fortress', 'Rest', 'Pass', 'Coast'];

var country1 = ['Dun', 'Aeril', 'Van', 'Mara'];
var country2 = ['dom', 'nia', 'land', 'landia', 'stan', ' Republic', 'nesia', ' Union', 'ada', 'stor'];

var makeLand = function() {
  var result = {};
  var modelToUse = getRandomUpTo(5);

  //Location
  //adjective + element
  //noun's + element
  //location prefix + suffix (+ele?)
  //generated prefix + suffix (+ele?)

  //country
  //country1 + country2
  //Generated prefix + country2

  return result;
};
