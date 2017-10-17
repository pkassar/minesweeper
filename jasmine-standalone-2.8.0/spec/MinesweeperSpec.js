describe("Minesweeper", function() {
var minesweeper;

  beforeEach(function() {
     minesweeper = new Minesweeper();
  });

  it("is created", function() {
    expect(minesweeper).not.toBeNull();
  });
});
