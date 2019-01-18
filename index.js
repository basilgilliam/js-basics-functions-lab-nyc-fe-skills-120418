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
const feetTravelled = distanceTravelledInFeet(startingBlock, endingBlock)
if (feetTravelled <= 400){
  return 0
}
}