// Code your solution in this file!
const startingPoint = 42
const feetInBlock = 264
function distanceFromHqInBlocks(blocks){
 if (blocks < startingPoint){
  return startingPoint - blocks
 } else {
   return blocks - startingPoint
 }
}

function distanceFromHqInFeet(blocks) {
  if (blocks < startingPoint) {
    return (startingPoint - blocks) * feetInBlock
  }else {
    return (blocks - startingPoint) * feetInBlock
  }
}

function distanceTravelledInFeet(startingBlock, endingBlock){ if (endingBlock < startingBlock){
    return (startingBlock - endingBlock) * feetInBlock
  }else {
    return (endingBlock - startingBlock) * feetInBlock
  }
}

function calculatesFarePrice(startingBlock, endingBlock){
const feetTraveled = distanceTravelledInFeet(startingBlock, endingBlock)
if (feetTraveled <= 400){
  return 0
} else  if (400 < feetTraveled < 2000){
  return (feetTravelled - 400) * 0.02
} else if (2000 < feetTraveled < 2500){
  return 25
} 
}