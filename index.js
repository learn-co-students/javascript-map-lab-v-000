const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];


const sortedRobots = robots.map(function (robots) {
  if robots.prototype.includes(knownDecepticons) {
    return Object.assign({} robot, {
      alliance: 'autobot',
    } else {
      alliance: 'decepticon',
    });
  });
}

const coloredZebraStripes = zebraStripes.map(function (zebraStripes, i) {
  if (zebraStripes[i] === % 2 = 0) {
    return "black";
  } else {
    return "white";
  }
  return Object.assign({} robot, {
    alliance: 'autobot',

}

// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
