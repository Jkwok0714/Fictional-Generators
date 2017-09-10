var syllables = ['long', 'dong', 'wang', 'fei', 'lei', 'wei', 'bao', 'ting', 'ling', 'fang', 'xiao', 'da',
  'fa', 'qiu', 'qiao', 'feng', 'yong', 'yang', 'mei', 'guo', 'jing', 'jiao', 'xie', 'mo', 'zhang', 'zheng',
  'luo', 'lei', 'ru', 'rong', 'ze', 'qiang', 'qian', 'ding', 'yin', 'du', 'shi', 'hao', 'guo'];

var westernTowns = ['San Francisca', 'Landon', 'Las Angeles', 'Sydnei', 'Vancauver', 'Austine', 'Old York', 'Millan', 'Bergin', 'Tokiyo'];
var gender = ['M', 'F'];
var origins = ['Shenzhan', 'Baijing', 'Xia\'an', 'Xiang Geng', 'Zhangshan', 'Changqing', 'Chongdu', 'Wuhon', 'Harbian', 'Nanjiang'];

var makeChinese = function() {
  var result = {};

  var genderTemp = getElement(gender);
  var name = '';
  var hometown;
  if (getRandomChance() < 75) {
    //two syllable name
    name += getElement(syllables);
  }
  name += getElement(syllables);

  name = capitalize(name);

  //By 20 percent chance, make a westernized chinese
  if (getRandomChance() < 20) {

  name += ' (' + makeGenericFirstName(genderTemp) + ') ';

    hometown = getElement(westernTowns);
  } else {
    hometown = getElement(origins);
  }

  name += ' ' + capitalize(getElement(syllables));
  result.name = name;
  result.gender = genderTemp;
  result.age = getRandomBetween(1, 90);
  result.hometown = hometown;


  return result;
};
