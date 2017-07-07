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

var sortedRobots = robots.map(function(robot){
  var new_alliance;
  if (knownDecepticons.includes(robot.name)) {
    new_alliance = 'decepticon'
  } else {
    new_alliance = 'autobot'
  }
  return Object.assign([], robot, {alliance: new_alliance})
});

var coloredZebraStripes = zebraStripes.map(function(stripe, index){
  var set_color;
  if(index % 2 === 0){
    set_color = 'black';
  } else {
    set_color = 'white';
  }
  return Object.assign([], stripe, {color: set_color})
});
