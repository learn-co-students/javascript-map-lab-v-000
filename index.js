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

const sortedRobots = robots.map( function(robot) {
  var alliance_string = ""
  if (knownDecepticons.includes(robot.name)) {
    alliance_string = "decepticon";
  } else {
    alliance_string = "autobot";
  }
  return Object.assign({}, robot, {
    alliance: alliance_string
  });
});


const coloredZebraStripes = zebraStripes.map( function(zebra,index){
  var color_string = ""
  console.log(zebra)
  if (index === 0 || index % 2 == 0) {
    color_string = "black";
  }else {
    color_string = "white";
  }
  console.log(color_string)
  return Object.assign({}, zebra, {
    color: color_string
  });
});
