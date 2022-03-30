function formatCep(cep: string): string {
  return cep.replace(/[^\d]/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
}

export default formatCep;
