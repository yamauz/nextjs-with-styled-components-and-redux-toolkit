import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counter from "../reducers/counter";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const reducer = {
  counter: counter.reducer,
};

const store = configureStore({ reducer });

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
