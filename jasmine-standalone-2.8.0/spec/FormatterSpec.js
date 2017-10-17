describe ("Formatter", function(){
var formatter;

beforeEach(function() {
  formatter = new Formatter();
});

  it ("Does not take single line input", function(){
var OneLineString = "An good example of a one line string"
expect(formatter.convertStringToArray(OneLineString)).toEqual("Incorrect input, need multi line string")
  });

});
