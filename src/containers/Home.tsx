import React from "react";
import InputBox from "@/components/InputBox";
import UserInfo from "@/components/UserInfo";
import Loading from "@/components/Loading";
import Additional from "@/components/Additional";

const Home: React.FC = () => {
  return (
    <>
      <InputBox />
      <React.Suspense fallback={<Loading />}>
        <UserInfo />
        <Additional />
      </React.Suspense>
    </>
  );
};

export default Home;
