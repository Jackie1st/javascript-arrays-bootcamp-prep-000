var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift("foo");
}
function addElementToEndOfArray(array, element) {
  return [...array, "foo"];
}
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push("foo");
}
function accessElementInArray(array, element) {
  return array[element];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift(1);
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}




