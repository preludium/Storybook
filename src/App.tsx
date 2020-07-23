import React, { FunctionComponent } from "react";
import Layout from "@components/Layout";
import { GlobalStyle } from "@utils/GlobalStyle";

const App: FunctionComponent = () => {
    return (
        <>
            <GlobalStyle/>
            <Layout>
                App
            </Layout>
        </>
    );
};
export default App;