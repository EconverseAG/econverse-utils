function cpfIsValid(value: string): boolean {
  let cpf: string = value.replace(/[^\d]+/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  const items = [...new Set(cpf)];
  if (items.length === 1) return false;

  const digits = cpf.substring(9, 11);

  const calculateFirstDigit = () => {
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);

    let result = 11 - (sum % 11);
    if (result === 10 || result === 11) result = 0;

    return result;
  };

  const calculateSecondDigit = () => {
    let sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);

    let result = 11 - (sum % 11);
    if (result === 10 || result === 11) result = 0;

    return result;
  };

  return (
    digits ===
    calculateFirstDigit().toString() + calculateSecondDigit().toString()
  );
}

export default cpfIsValid;
