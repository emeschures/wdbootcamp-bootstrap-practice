function isEven(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// function factorial(num) {
//   if(num < 0){
//     return -1;
//   } else if(num === 0) {
//     return 1;
//   } else {
//     return (num * factorial(num - 1));
//   }
// }

function factorial(num) {
  var result = 1;
  for(var i = 0; i <= num; i++) {
    result *= 1;
  }
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}