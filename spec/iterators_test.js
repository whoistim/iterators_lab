var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
////////////////////   
  describe("#min", function() {
    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it("should return the minium in an array", function(){
      expect(Iterators.min(myArr)).to.equal(22);
    });

    it("should return Infinity for an empty array ", function(){
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
      });
//////////////////////

  });
  describe("#each", function() {

    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];

    });

    it("should update each element in the array, add 2", function(){
      expect(Iterators.each(myArr,function(a){return(a+2);})).to.deep.equal([68,24,69,36]);
    });
  });
  describe("#map", function() {

    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it("should add 2 to each element in the array and put into a NEW array", function(){
      expect(Iterators.map(myArr,function(a){return(a+2);})).to.deep.equal([68,24,69,36]);
    });
  });
  describe("#filterMe", function() {

    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34,33,1,1001,1002];
    });

    it("should remove all odd numbers", function(){
      expect(Iterators.filterMe(myArr,function(a){return a%2===0;})).to.deep.equal([66,22,34,1002]);
    });
  });

  describe("#reduce", function() {
    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];
    });
  it("should squash these values into a single value based on a+b fucntion", function(){
    expect(Iterators.reduce(myArr,function(a,b){return(a+b);})).to.equal(189);
    });
  it("should squash these values into a single value based on a-b fucntion", function(){
    expect(Iterators.reduce(myArr,function(a,b){return(a-b);})).to.equal(-57);
    });
  it("should squash these values into a single value based on a*b fucntion", function(){
  expect(Iterators.reduce(myArr,function(a,b){return(a*b);})).to.equal(3307656);
  });
  it("should squash these values into a single value based on a/b fucntion", function(){
  expect(Iterators.reduce(myArr,function(a,b){return(a/b);})).to.equal(0.001316945);
  });
  });

});
