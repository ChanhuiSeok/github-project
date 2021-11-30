import React from "react";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "@/state/user";

/* recoil 테스트 컴포넌트 */

const Additional: React.FC = () => {
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <div>
      <p>팔로워 : {userInfo.followers}</p>
      <p>팔로잉 : {userInfo.following}</p>
    </div>
  );
};

export default Additional;
