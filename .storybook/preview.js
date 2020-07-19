import React from "react";
import { addDecorator } from "@storybook/react";
import DefaultDecorator from "../src/layout/DefaultDecorator";

addDecorator(storyFn => <DefaultDecorator>{storyFn()}</DefaultDecorator>);
