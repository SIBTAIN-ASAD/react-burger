import React from "react";
import "./App.css";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
// import TextData from "./practice/TextData";
// import Convertor from "./practice/convertor";
// import { Provider } from "react-redux";
// import store from "./practice/store";

const App = () => {

  return (
    <>
      <Navbar />
      <Main />
      
      {/* <TextData /> */}
      {/* <Provider store={store}>
      <Convertor />
      </Provider> */}


    </>
  );
}

export default App;
