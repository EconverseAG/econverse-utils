function unformatMoney(money: string, base = 100): number {
  return Number(money.replace('R$', '').replace(',', '.').trim()) * base;
}

export default unformatMoney;
