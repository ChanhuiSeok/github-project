import { atom, selector, selectorFamily } from "recoil";
import { AxiosResponse } from "axios";
import { getUserInfo } from "@/api/user";

/* input에서 입력하는 데이터 */
export const userNameAtom = atom<string>({
  key: "user/name",
  default: "",
});

/* fetch 결과로 받은 Users 데이터 */
export const userInfoAtom = atom<Users | null>({
  key: "user/info",
  default: null,
});

export const userInfoSelector = selectorFamily<Users, string>({
  key: "user/getGithubUser",
  get: (param) => async () => {
    try {
      const response = await getUserInfo(param);
      return response.data;
    } catch (e: any) {
      const { message, documentation_url }: ErrorState = e.response?.data;
      return message;
    }
  },
});
