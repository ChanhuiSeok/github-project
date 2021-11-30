import React, { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { useSetRecoilState } from "recoil";
import { userNameAtom } from "@/state/user";

const InputBox: React.FC = () => {
  const [name, setName] = useState<string>("");
  const setUserName = useSetRecoilState(userNameAtom); // userName state 담는 atom
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setUserName(name);
    }
  };
  const onClick = () => {
    setUserName(name);
  };
  return (
    <>
      <p>입력</p>
      <input
        type="text"
        value={name}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>제출</button>
    </>
  );
};

export default InputBox;
