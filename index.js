// Code your solution in this file!
const startingPoint = 42
function distanceFromHqInBlocks(blocks){
 if (blocks < startingPoint){
  return startingPoint - blocks
 } else {
   return blocks - startingPoint
 }
}