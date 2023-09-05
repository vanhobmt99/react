import React, { useContext } from "react";
import MyContext from "./context";

const ContextComponent = () => {
  const sharedData = useContext(MyContext);

  return <p>{sharedData}</p>;
};

export default ContextComponent;
