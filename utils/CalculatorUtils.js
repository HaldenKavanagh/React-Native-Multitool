export const calculateResult = (previousValue, currentValue, operator) => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case '-':
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case '*':
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case '/':
        result = parseFloat(previousValue) / parseFloat(currentValue);
        break;
      default:
        return;
    }
    return result.toString();
  };