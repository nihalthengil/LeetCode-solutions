let createHelloWorld = function () {
  return function (...arg) {
   return "Hello World"
  }
}
let a = createHelloWorld
