import axios from 'axios';
const baseUrl = 'http://192.168.18.40:3000';

interface IRegisterUserPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerUser = async ({
  name,
  email,
  password,
  confirmPassword,
}: IRegisterUserPayload) => {
  let message = '';
  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}/signup`,
      data: {
        name,
        email,
        password,
        confirmPassword,
      },
    });
    message = res.data;
  } catch (err: any) {
    message = err.response.data;
  }
  return message;
};
