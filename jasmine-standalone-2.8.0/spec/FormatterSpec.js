describe ("Formatter", function(){
var formatter;

beforeEach(function() {
  formatter = new Formatter();
});

it ("Does not take single line input", function(){
  var OneLineString = "An good example of a one line string"
  expect(formatter.convertMultiLineStringToArray(OneLineString)).toEqual("Incorrect input, need multi line string")
});

it ("Returns an array from multi line input", function(){
  var MultiLineString = `abc
def`
var arr = [
  ["a", "b", "c"],
  ["d", "e", "f"]
];
  expect(formatter.subdivideStrings(MultiLineString)).toEqual(arr)
});

it ("Changes the dots to zeroes in our array", function(){
  var MultiLineString = `..*
.*.`
var arr = [
  [0, 0, "*"],
  [0, "*", 0]
];
  expect(formatter.stringToIntegerArray(MultiLineString)).toEqual(arr)
});




});
