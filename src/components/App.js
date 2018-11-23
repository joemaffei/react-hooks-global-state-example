import React, { useReducer } from "react";
import LeftButton from '../components/LeftButton';
import RightButton from '../components/RightButton';
import rootReducer from "../reducers/rootReducer";
import Store from './Store';

const initialState = {
  left: 0,
  right: 0
};

const App = () => {
  const store = useReducer(rootReducer, initialState);
  return (
    <Store.Provider value={store}>
      <LeftButton />
      <RightButton />
    </Store.Provider>
  );
};

export default App;
