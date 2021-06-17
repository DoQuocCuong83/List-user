import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from "./global-style";
import PageUsers from "./application";

const App = () => {
    return (
        <Provider store={store()}>
            <GlobalStyle />
            <PageUsers />
        </Provider>
    );
};

export default App;
