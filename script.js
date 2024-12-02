let currentInput = '';

function appendNumber(number) {
  currentInput += number;  // 在当前输入字符串末尾添加数字
  document.getElementById('result').value = currentInput;  // 更新显示框
}

function appendOperator(operator) {
  // 如果最后一个字符已经是操作符，禁止再输入另一个操作符
  if (currentInput.length === 0) return;
  if ('+-*/'.includes(currentInput[currentInput.length - 1])) return;
  
  currentInput += ` ${operator} `;
  document.getElementById('result').value = currentInput;
}

function calculateResult() {
  try {
    // 使用 eval 来计算表达式，但要确保表达式是合法的
    let result = eval(currentInput);  // 计算结果
    document.getElementById('result').value = result;  // 更新显示框
    currentInput = result.toString();  // 计算后，将结果作为当前输入
  } catch (error) {
    document.getElementById('result').value = '错误';
    currentInput = '';
  }
}

function clearDisplay() {
  currentInput = '';  // 清空当前输入
  document.getElementById('result').value = '';  // 清空显示框
}
