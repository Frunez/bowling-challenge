'use strict';

describe('Bowling', function() {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('returns the score of a roll', function(){
    expect(bowling.getScore(2)).toEqual(2);
  });
});
