import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userInfoSelector, userNameAtom, userInfoAtom } from "@/state/user";

const UserInfo: React.FC = () => {
  const userName = useRecoilValue<string>(userNameAtom); // userName state 불러오기
  const userInfoResponse = useRecoilValue(userInfoSelector(userName)); // selectorFamily에 인자(userName) 넘겨서 받은 값 저장
  const [userInfo, setUserInfo] = useRecoilState<Users>(userInfoAtom);

  useEffect(() => {
    setUserInfo(userInfoResponse);
  }, [userName]);

  return (
    <div>
      <p>name : {userInfo.name}</p>
      <p>company : {userInfo.company}</p>
      <p>biography : {userInfo.bio}</p>
      <p>userEmail : {userInfo.email}</p>
      <p>
        <img src={userInfo.avatar_url}></img>
      </p>
      <p>type: {userInfo.type}</p>{" "}
      {/* TODO : type이 User 이외의 것들은 다르게 디자인 */}
    </div>
  );
};

export default UserInfo;
