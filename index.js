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

function isDeceptive(robot){
  if (knownDecepticons.includes(robot.name)) {
    return "decepticon"
  }
  else{
    return "autobot"
  }
}

function sortThoseRobots(){
  return robots.map(robot =>{
    return Object.assign({}, {name:robot.name, alliance: isDeceptive(robot)} )
  })
}

function isEven(input){
  if (input % 2 === 0){
    return true
  }
  else { 
    return false
  }
}

const sortedRobots = sortThoseRobots(robots)

function colorThatZebra(){
  return zebraStripes.map(stripe =>{
    let index = zebraStripes.indexOf(stripe)
    debugger
    if(isEven(index)){
      return Object.assign({}, {width: stripe.width, color: 'black'} )
    }
    else{
      return Object.assign({}, { width: stripe.width, color: 'white' })
    }
  })
}

const coloredZebraStripes = colorThatZebra(zebraStripes)