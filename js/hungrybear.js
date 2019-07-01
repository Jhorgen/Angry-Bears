export let bear = {
  name: "Fuzzy",
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  },
  giveFood: function(amount, food) {
    this.foodLevel += amount;
    return `The bear ate the ${food}! Food level goes up ${amount}!`;
  },
};


bear.eatOne = function(food) {
  return bear.giveFood(1, food);
}
bear.eatSmall = bear.feed(5);
bear.eatBig = bear.feed(7);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor( (Math.random() * 20) + 1) );
