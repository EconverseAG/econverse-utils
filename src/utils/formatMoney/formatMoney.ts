function formatMoney(amount: number, base = 100): string {
  return `R$ ${(amount / base).toFixed(2).replace('.', ',')}`;
}

export default formatMoney;
