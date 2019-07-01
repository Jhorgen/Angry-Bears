import { bear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  // let bear = bear;

  beforeEach(function() {
    jasmine.clock().install();
    bear.foodLevel = 10;
    bear.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(bear.name).toEqual("Fuzzy");
    expect(bear.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(bear.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    bear.foodLevel = 0;
    expect(bear.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(bear.didYouGetEaten()).toEqual(true);
  });

  it('eatBig("berries") test', function() {
    jasmine.clock().tick(9001);
    // bear.feed(9)("berries");
    // feed9("berries");
    expect(bear.eatBig('berries')).toEqual("The bear ate the berries! Food level goes up 7!");
    expect(bear.foodLevel).toEqual(8);
  });

  it('feed 20 fish test', function() {
    jasmine.clock().tick(10001);
    // bear.feed(9)("berries");
    // feed9("berries");
    expect(bear.feed(20)('fish')).toEqual("The bear ate the fish! Food level goes up 20!");
    expect(bear.foodLevel).toEqual(20);
  });

  it('giveFood test', function () {
      expect(bear.giveFood(10,'children')).toEqual("The bear ate the children! Food level goes up 10!");
      expect(bear.foodLevel).toEqual(20);
  });

  it('eatWeirdThing test loop', function () {
    (new Array(1000)).forEach(function() {
      bear.foodLevel = 0;
      expect(bear.eatWeirdThing('weird thing')).toContain("The bear ate the weird thing! Food level goes up");
      expect(1 <= bear.foodLevel && bear.foodLevel <= 20).toEqual(true);
    });
  });

});
