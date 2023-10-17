import axios from "axios";
import { PropsWithChildren } from "react";

interface PropsUser {
  id?: string;
  name?: string;
  email: string;
  password?: string;
  newPassword?: string;
}

export async function signUp(props: PropsWithChildren<PropsUser>) {
  let url = `https://api.escuelajs.co/api/v1/users/`;
  try {
    const data = {
      name: props.name,
      email: props.email,
      password: props.password,
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
    };

    await axios.post(url, data);
  } catch (error: any) {
    alert("Erro ao fazer a solicitação" + error);
  }
}

export async function signIn(props: PropsWithChildren<PropsUser>) {
  let usersUrl = `https://api.escuelajs.co/api/v1/users`;

  try {
    const response = await axios.get(usersUrl);

    if (response.status === 200) {
      const users = response.data;

      const userWithMatchingCredentials = users.find((user: any) => {
        return user.email === props.email && user.password === props.password;
      });

      if (userWithMatchingCredentials !== undefined) {
        try {
          let authUrl = `https://api.escuelajs.co/api/v1/auth/login`;
          const data = {
            email: props.email,
            password: props.password,
          };
          const response = await axios.post(authUrl, data);
          if (response.status === 201) {
            const receivedData = {
              token: response.data.access_token,
              id: userWithMatchingCredentials.id,
            };
            return receivedData;
          } else {
            alert("Não foi possível capturar o token");
          }
        } catch (error: any) {
          alert(error);
        }
      } else {
        alert("Falha ao fazer login. Verifique seu email e senha");
      }
    } else {
      alert("Falha ao obter a lista de usuários");
    }
  } catch (error: any) {
    alert("Erro ao fazer a solicitação" + error);
  }
}

export async function checkEmail(props: PropsWithChildren<PropsUser>) {
  let url = `https://api.escuelajs.co/api/v1/users/is-available`;

  try {
    const data = {
      email: props.email,
    };

    const response = await axios.post(url, data);

    if (response.status === 201) {
      const isEmailAvailable = response.data.isAvailable;
      alert("Email encontrado" + isEmailAvailable);
      return isEmailAvailable;
    } else {
      alert("Email não encontrado");
    }
  } catch (error: any) {
    alert("Erro ao fazer a solicitação" + error);
    return true;
  }
}

export async function changePassword(props: PropsWithChildren<PropsUser>) {
  let usersUrl = `https://api.escuelajs.co/api/v1/users`;

  try {
    const data = {
      password: props.newPassword,
    };
    const response = await axios.get(usersUrl);

    if (response.status === 200) {
      const users = response.data;

      const userWithMatchingCredentials = users.find((user: any) => {
        return user.email === props.email;
      });

      if (userWithMatchingCredentials) {
        let putUrl = `https://api.escuelajs.co/api/v1/users/${userWithMatchingCredentials.id}`;

        try {
          const response = await axios.put(putUrl, data);

          if (response.status === 200) {
            alert("Senha alterada");
          } else {
            alert("Senha não alterada");
          }
        } catch (error: any) {
          alert("Erro ao fazer a solicitação" + error);
        }
      }
    }
  } catch (error: any) {
    alert("Erro ao fazer a solicitação" + error);
  }
}

export async function getSingleUser(props: PropsWithChildren<PropsUser>) {
  try {
    let userUrl = `https://api.escuelajs.co/api/v1/users/${props.id}`;
    const response = await axios.get(userUrl);

    if (response.status === 200) {
      const data = {
        email: response.data.email,
        name: response.data.name,
        avatar: response.data.avatar,
      };

      return data;
    } else {
      alert("erro profile");
    }
  } catch (e) {
    alert("erro ao capturar" + e);
  }
}
