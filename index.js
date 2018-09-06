var katzDeliLine = []

function takeANumber(katzDeliLine, person) {
  var linePosition = katzDeliLine.length + 1;
  katzDeliLine.push(person);
  
  return `Welcome, ${person}. You are number ${linePosition} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0)
  {
<<<<<<< HEAD
    return `Currently serving ${katzDeliLine.shift()}.`
=======
    var deliLineAfter = katzDeliLine.slice(1)
    return `Currently serving ${katzDeliLine[0]}.`;
>>>>>>> 13b71da7a44f24e0323d5996ee312ac16577d4c9
  }
  else 
  {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = []
  if(katzDeliLine.length > 0) {
    var position = 1
    for(var i=0;  i < katzDeliLine.length; i++) {
      line.push(` ${position}. ${katzDeliLine[i]}`)
      position++
    }
    return `The line is currently:${line}`
  }
  else {
    return "The line is currently empty."
  }
  
}