// Testing the main file
describe(".trigger()", function() {
  
  it("should be a function", function() {
    expect(typeof base.trigger).to.equal('function');
  });
  
  it("can trigger a click", function() {
    base.on('click', function(e){
      expect(!!e).to.equal(true);
    });
    base.trigger('click');
  });
  
  it("can trigger an event in the wrong element", function() {
    base.on('click', function(e){
      expect(!!e).to.equal(true);
    });
    base.trigger('click');
  });
  
  it("doesn't trigger all events", function() {
    base.on('click', function(e){
      throw "Shouldn't be called";
    });
    base.trigger('submit');
  });
});