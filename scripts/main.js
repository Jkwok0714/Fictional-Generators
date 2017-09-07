var main = function() {

};


var printHtmlLog = function(type, ...args) {
  var $body = $('#scrollbox');
  var result = args.join(' ');
  var $textBit = $('<div class="' + type + '">' + result + '</div>');
  $textBit.hide();
  $textBit.appendTo($body);
  $textBit.show(700);
}

var renderArray = function(array) {
  for (var [i, ele] of array.entries()) {
    printHtmlLog('jsLog', '#', i + 1, ':', ele);
  }
}

var jQueryStuff = function() {
  $('#generateButton').click(() => {
    $('#scrollbox').empty();
    renderArray(runGenerator($('#numToGenerate').val(), assembleEquipment));
  })
}

var runGenerator = function(amount, cb) {
  var results = [];
  for (var i = 0; i < amount; i++) {
    var newObj = cb();
    var stringified = '';
    for (var key in newObj) {
      stringified += key + ': ' + newObj[key] + ' - ';
    }
    results.push(stringified);
  }
  return results;
};

$(document).ready(function() {
  jQueryStuff();
  main();
});
