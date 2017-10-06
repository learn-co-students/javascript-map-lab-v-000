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

/* 
1. Create a new variable called sortedRobots; The value of this variable is the mapped robots array;
2. Return each robot object with the alliance filled in with either an 'autobot' or 'decepticon' string.
3. To figure out a robot's alliance, check if their name exists in the knownDecepticons array.
4. The original objects in the robots array must not be modified, so be sure to use Object.assign()
*/

const sortedRobots = robots.map(robot => {
  const isDecepticon = knownDecepticons.includes(robot.name); //use Array.prototype.includes check if an element exists in an array
  return Object.assign({}, robot, {
    alliance: isDecepticon ? 'decepticon' : 'autobot'
  });
});

console.log(sortedRobots);

/*
1. Create a new variable called coloredZebraStripes; The value of this variable is the mapped zebraStripes array;
2. Return each stripe object with the stripe filled in with either a 'black' or 'white' string.
3. A stripe is black when the stripe's index is even, and it's white if a stripe's index is odd.
4. The original objects in the zebraStripes array must not be modified, so be sure to use Object.assign()
*/

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

var coloredZebraStripes = zebraStripes.map((stripe, index) => {
const isEven = (index % 2) === 0;
  return Object.assign({}, stripe, {
    color: isEven ? 'black' : 'white'
  });
});

console.log(coloredZebraStripes);
