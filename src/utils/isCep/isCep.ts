function isCep(value: string): boolean {
  let cep: string = value.replace(/[^\d]+/g, '');

  return cep.length === 8;
}

export { isCep };
