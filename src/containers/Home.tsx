import React from "react";
import InputBox from "@/components/InputBox";
import UserInfo from "@/components/UserInfo";
import Loading from "@/components/Loading";

const Home: React.FC = () => {
  return (
    <>
      <InputBox />
      <React.Suspense fallback={<Loading />}>
        <UserInfo />
      </React.Suspense>
    </>
  );
};

export default Home;
