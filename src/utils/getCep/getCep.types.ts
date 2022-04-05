interface ICepInformations {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface ICepError {
  erro: boolean;
}

export type { ICepInformations, ICepError };
