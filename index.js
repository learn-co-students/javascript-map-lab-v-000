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

function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  };

  return result;
};

const sortedRobots = map(robots, function(robot){
  if(knownDecepticons.includes(robot.name)){
    return Object.assign({}, robot, {
      alliance: 'deception'
    });
  }
  return Object.assign({}, robot, {
    alliance: 'autobot'
  });
});

const coloredZebraStripes = map(zebraStripes, function(zebra){
  var index = zebraStripes.indexOf(zebra);
  if(index % 2 === 0){
    return Object.assign({}, zebra, {
      color: 'black'
    })
  } else {
    return Object.assign({}, zebra, {
      color: 'white'
    })
  }
})
