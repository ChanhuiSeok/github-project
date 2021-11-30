import { atom, selector, selectorFamily } from "recoil";
import { AxiosResponse } from "axios";
import { getUserInfo } from "@/api/user";

const initData = {
  login: "",
  id: 0,
  node_id: "",
  avatar_url: "",
  name: "",
  company: "",
  blog: "",
  location: "",
  email: "",
  bio: "",
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  type: "",
};

/* input에서 입력하는 데이터 */
export const userNameAtom = atom<string>({
  key: "user/name",
  default: "",
});

/* fetch 결과로 받은 Users 데이터 */
export const userInfoAtom = atom<Users>({
  key: "user/info",
  default: initData,
});

export const userInfoSelector = selectorFamily<Users, string>({
  key: "user/getGithubUser",
  get: (param) => async () => {
    try {
      const response = await getUserInfo(param);
      return response.data;
    } catch (e: any) {
      const { message }: ErrorState = e.response?.data;
      return message;
    }
  },
});
