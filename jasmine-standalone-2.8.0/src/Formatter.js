function Formatter(){
};

Formatter.prototype.convertMultiLineStringToArray = function(string) {
  if (string.includes('\n') == false) {
    return 'Incorrect input, need multi line string'
  }
  return string.split('\n')
};

Formatter.prototype.subdivideStrings = function(string) {
  var twoDimensionalArray = [];
  var array = this.convertMultiLineStringToArray(string);
  array.forEach(function(element){
    twoDimensionalArray.push(element.split(''));
  });
  return twoDimensionalArray;
};

Formatter.prototype.convertsDotsToZeroes = function (twoDArray) {
  var rows = twoDArray.length
  var columns = twoDArray[0].length
  var convertedArray = [...Array(rows).keys()].map(i => Array(columns));

  for(var i = 0; i < twoDArray.length; i++) {
      var cube = twoDArray[i];
      for(var j = 0; j < cube.length; j++) {
          if ( cube[j] == '.'){
            convertedArray[i][j] = 0;
          } else {
            convertedArray[i][j] = '*';
          }
      }
  }
  return convertedArray;
};

Formatter.prototype.stringToIntegerArray = function (string) {
  return this.convertsDotsToZeroes(this.subdivideStrings(string));
};

// var myarray = [...Array(3).keys()].map(i => Array(3));
//
// for(var i = 0; i < array2d.length; i++) {
//     var cube = array2d[i];
//     for(var j = 0; j < cube.length; j++) {
//         if ( cube[j] == '.'){
//           results[i][j] = 0;
//         } else {
//           results[i][j] = '*';
//         }
//     }
// }
