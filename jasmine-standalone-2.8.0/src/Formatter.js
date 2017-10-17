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
