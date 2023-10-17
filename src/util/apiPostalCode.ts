import axios from "axios";

interface address {
  postalCode: string;
  address: string;
  city: string;
  state: string;
  fullName: string;
}
export async function getPostalCode(postalCode: string) {
  try {
    let url = `https://viacep.com.br/ws/${postalCode}/json/`;
    const response = (await axios.get(url)).data;
    const fullAddress: address = {
      postalCode: response.cep,
      address: response.logradouro,
      city: response.localidade,
      state: response.uf,
      fullName: response.uf,
    };
    if (fullAddress.postalCode === undefined) {
      return undefined;
    }
    return fullAddress;
  } catch (error) {
    return undefined;
  }
}
