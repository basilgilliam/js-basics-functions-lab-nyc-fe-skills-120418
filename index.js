// Code your solution in this file!
const startingPoint = 42
function distanceFromHqInBlocks(blocks){
 return blocks - startingPoint
 if (blocks < startingPoint){
  return startingPoint - blocks
 } else {
   return blocks - startingPoint
 }
}