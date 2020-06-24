import React from "react";
import { Home } from "./components/Home";
import { Provider, connect } from "react-redux";
import store from "./store";
import { Toaster } from "./components/Toast";

function App(props) {
  return (
    <>
      {props.success ? (
        <Toaster type={"success"} title={"Success"} message={props.success} />
      ) : (
        <></>
      )}

      {props.error ? (
        <Toaster type={"error"} title={"Error Occured"} message={props.error} />
      ) : (
        <></>
      )}
      <Home></Home>
    </>
  );
}

export const mapStateToProps = state => {
  return {
    success: state.status.success,
    error: state.status.error
  };
};

export default connect(mapStateToProps)(App);
