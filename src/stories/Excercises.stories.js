import React from "react";
import { storiesOf } from "@storybook/react";
import App from "../layout/App";
import Excercises from "../components/Excercises";


storiesOf("Excercises", module)
    .addDecorator(storyFn => <App>{storyFn()}</App>)
    .add("Excercises", () => (
        <Excercises />
    ));
