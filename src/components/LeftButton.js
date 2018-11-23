import React, { useContext } from "react";
import { LEFT_CLICKED } from "../shared/actionTypes";
import Store from "./Store";

const leftClickAction = { type: LEFT_CLICKED };

const LeftButton = () => {
  const [state, dispatch] = useContext(Store);
  return (
    <button onClick={() => dispatch(leftClickAction)}>
      Left: {state.left}
    </button>
  );
};

export default LeftButton;
