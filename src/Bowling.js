'use strict';

Bowling = function(){
  this.score = 0;
};

  Bowling.prototype.getScore = function(score){
    this.score = score;
    if (this.score == null) {
      this.score = this.randomBowl();
    }
    return this.score = score;
  };

  Bowling.prototype.randomBowl = function() {
    return Math.floor(Math.random()*11);
  };
