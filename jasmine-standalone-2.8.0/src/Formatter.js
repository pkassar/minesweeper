function Formatter(){
};

Formatter.prototype.convertStringToArray = function(string) {
  if (string.includes('\n') == false) {
    return 'Incorrect input, need multi line string'
  } else {return 'success'}
};
