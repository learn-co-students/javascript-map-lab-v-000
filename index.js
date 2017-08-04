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

// All 3 Ways work

const sortedRobots = robots.map(function(robot) {
  return Object.assign({}, robot, {
    alliance: knownDecepticons.includes(robot.name) ? 'decepticon' : 'autobot'
  })
})

// const sortedRobots = robots.map(function(robot) {
//   let newrobots = Object.assign({}, robot);
//   if (knownDecepticons.includes(newrobots.name)) {
//     newrobots.alliance = 'decepticon'
//   } else {
//     newrobots.alliance = 'autobot'
//   };
//   return newrobots;
// })

// var sortedRobots = robots.map(function(robot) {
//     if(knownDecepticons.includes(robot.name)) {
//       return Object.assign({}, robot, {
//         alliance: "decepticon"
//       });
//     } else {
//       return Object.assign({}, robot, {
//         alliance: "autobot"
//       });
//     };
// });

const coloredZebraStripes = zebraStripes.map(function(zebra, index) {
  return Object.assign({}, zebra, {
    color: index % 2 === 0 ? 'black' : 'white' 
  })
})