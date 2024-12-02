let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
  // 防止输入多个连续的操作符
  if (currentInput.length === 0) return;  // 不能以操作符开始
  if ('+-*/'.includes(currentInput[currentInput.length - 1])) return; // 禁止输入多个操作符
  currentInput += operator;
  document.getElementById('result').value = currentInput;
}

function calculateResult() {
  try {
    // 计算表达式
    let result = eval(currentInput);
    document.getElementById('result').value = result;
    currentInput = result.toString();  // 将结果存储到 currentInput 变量中，方便继续计算
  } catch (error) {
    document.getElementById('result').value = '错误';
    currentInput = '';  // 清空输入
  }
}

function clearDisplay() {
  currentInput = '';  // 清空当前输入
  document.getElementById('result').value = '';  // 清空显示框
}
