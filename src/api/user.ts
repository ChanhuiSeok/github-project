import axios from "axios";
import { accessToken } from "@/key/accessToken";

export const getUserInfo = (name: string) => {
  return axios.get(`https://api.github.com/users/${name}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
