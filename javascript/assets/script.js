let result = 0;
let log = [];

function addNumbers() {
  console.log(('type of userInput:' ,typeof userInput.value));
  result += parseInt(userInput.value);
  console.log(('type of userInput:' ,typeof result));

  const newLog = {
    type: 'ADD',
    num: parseInt(userInput.value)
  };
  log.push(newLog);
  // log.push(userInput.value);
  outputResult(result);
  console.log('current logs: ', log);
  console.log('log[0].type: ', log[0].type);
  console.log(('type of log:' ,typeof log));
}

function clear() {
  result = 0;
  log.splice(0)
  outputResult(result);
  console.log('current logs: ', log);
}

addButton.addEventListener('click', addNumbers);
clearButton.addEventListener('click', clear);