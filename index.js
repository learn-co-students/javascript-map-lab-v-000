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

const sortedRobots = robots.map(function (robot) {
  return knownDecepticons.includes(robot.name) ? Object.assign({}, robot, { name: robot.name, alliance: 'decepticon'}) : Object.assign({}, robot, { name: robot.name, alliance: 'autobot'})
})

const coloredZebraStripes = zebraStripes.map(function (stripe) {
  return zebraStripes.indexOf(stripe) % 2 == 0 ? Object.assign({}, stripe, { width: stripe.width, color: 'black'}) : Object.assign({}, stripe, { width: stripe.width, color: 'white'})
})
