 fib = Rx.Observable.create(subscriber => {
 
        });
      
mocha.setup("bdd");

describe("fibonacci", () => {
  it("should emit at least ten elements", (done) => {
    fib.take(10)
        .count()
        .subscribe(v => {
          chai.assert.equal(v,10);
          done();
        });
  });
  it("should start with 0", (done) => {
    fib.first()
        .subscribe(v => {
          chai.assert.equal(v, 0);
          done();
        });
  });
  it("should have a 1 in the second slot", (done) => {
    fib.skip(1)
        .first()
        .subscribe(v => {
          chai.assert.equal(v, 1);
          done();
        });
  });
  it("the 50th value should be correct", (done) => {
    fib.skip(49)
        .first()
        .subscribe(v => {
          chai.assert.equal(v, 7778742049);
          done();
        });
  })
});

mocha.run();