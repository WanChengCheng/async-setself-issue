import { useRecoilValue } from "recoil";
import { stringState } from "./state";

export const Test = () => {
  const v = useRecoilValue(stringState);
  return <div>v:{v}</div>;
};
