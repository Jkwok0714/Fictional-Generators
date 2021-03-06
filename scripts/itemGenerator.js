// part 1 part 2 of part 3

var part1 = ['Desert', 'Oceanic', 'Solar', 'Sky', 'Far', 'Earthen', 'Luminant', 'Bone', 'Cleaving', 'Fiery', 'Frozen', 'Devastating', 'Terrifying', 'Grim', 'Foul', 'Janky', 'Terrible', 'Awesome',
  'Godlike', 'Holy', 'Unholy', 'Crude', 'Deathly', 'Arrogant', 'Refined', 'Graceful', 'Resolute', 'Gleaming', 'Ordinant', 'Lawful', 'Chaotic', 'Aquatic', 'Dusty', 'Demonic', 'Angelic',
  'Volcanic', 'Crystal', 'Shitty', 'Icy', 'Nordic', 'Oriental', 'Forsaken', 'Bloody', 'Haunted', 'Cursed', 'Old', 'Trusty', 'Ashera\'s', 'Valin\'s', 'Crunchy', 'Heavy', 'Dangerous', 'Suicidal',
  'Hallowed', 'Impossibly Bad', 'Lightweight', 'Traveller\'s', 'Executioner', 'Golden', 'Grey', 'Singing', 'Knightly', 'Makeshift', 'Improvised'];
var part2 = ['Beater', 'Slicer', 'Splitter', 'Blade', 'Axe', 'Waraxe', 'Halberd', 'Spear', 'Sword', 'Zweihander', 'Morningstar', 'Mace', 'Flail', 'Knuckle', 'Club', 'Sling', 'Longbow',
  'Horsebow', 'Recurve', 'Rapier', 'Sidearm', 'Revolver', 'Handcannon', 'Scythe', 'Bleeder', 'Dagger', 'Knife', 'Javelin', 'Hook', 'Heirloom', 'Musket', 'Dirk', 'Main Gauche', 'Staff',
  'Wand', 'Lance', 'Bec de Corbin', 'Hammer', 'Warhammer', 'Maul', 'Machete', 'Cutlass', 'Arming Sword', 'Epee', 'Shortsword', 'Trident', 'Glaive', 'Sickle'];
var part3 = ['Terror', 'Grimness', 'Dusk', 'Ancient Lords', 'Heaven', 'Hell', 'Romance', 'Justice', 'Light', 'Darkness', 'Reaper', 'Dominance', 'Absolution', 'Bloodlust', 'Vengeance', 'Corniness',
  'Metal', 'Death', 'Great Punishment', 'Fortune', 'Sloth', 'Lust', 'Deep Depths', 'Howling Winds', 'Deepest Caves', 'Griefcaves', 'Kings', 'Adelain', 'Decay', 'Stone', 'Lapland', 'Silatria',
  'Cleansing', 'the Eastern Lands', 'Mists', 'the Clouds', 'the Wind', 'the Sea', 'Alea', 'Winter'];

var locations = ['Acarime', 'Alon', 'Lugera', 'Karrier\s Fort', 'Ialesys', 'Amina', 'Relinq', 'Belwood'];

var assembleEquipment = function() {
  var result = {};
  var name = '';

  //Generate a name
  if (getRandomChance() < 20) {
    name += getElement(part1);
    name += ' ' + getElement(part2);
    if (name.length <= 10) {
      name += ' of ' + getElement(part3);
    }
  } else {
    name += getElement(part2);
    name += ' of ' + getElement(part3);
  }
  result.name = name;

  //Generate a strength property
  result.strength = getRandomChance();
  result.worth = result.strength * 300 + 100;
  result.origin = getElement(locations);

  return result;
}

var generateTestStuff = function(times) {
  i = 0;
  while (i < times) {
    var newEquip = assembleEquipment();
    console.log('o===(|============>')
    console.log('Got:', newEquip.name, ' ... strength', newEquip.strength, 'worth', newEquip.worth);
    console.log('It is from', newEquip.origin);
    i++;
  }
};

console.log('Now with', part1.length * part2.length * part3.length, 'possibilities!');

generateTestStuff(10);
