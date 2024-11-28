import { useContext } from "react";
import { WinContext } from "../context/WinContext";

const useWin = () => {
  const context = useContext(WinContext);
  if (!context) {
    throw new Error("Context must be used within its provider");
  }
  return context;
};
export default useWin;
