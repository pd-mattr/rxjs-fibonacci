fib = Rx.Observable.create(subscriber => {

});
      
fib_forever = Rx.Observable.create(subscriber => {

});

mocha.setup("bdd");

describe("fast fibonacci", function(){
  this.timeout(500);
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

describe("forever fibonacci", function(){
  this.timeout(30000);
  it("should emit at least ten elements", (done) => {
    fib_forever.take(10)
               .count()
               .subscribe(v => {
                 chai.assert.equal(v,10);
                 done();
               });
  });
  it("should start with 0", (done) => {
    fib_forever.first()
        .subscribe(v => {
          chai.assert.equal(v, 0);
          done();
        });
  });
  it("should have a 1 in the second slot", (done) => {
    fib_forever.skip(1)
        .first()
        .subscribe(v => {
          chai.assert.equal(v, 1);
          done();
        });
  });
  it("the 50th value should be correct", (done) => {
    fib_forever.skip(49)
        .first()
        .subscribe(v => {
          chai.assert.equal(v, 7778742049);
          done();
        });
  })
});
mocha.run();