const { argv, env } = require("process");

const custom = require("../webpack.config.js")(env, argv);

module.exports = {
    stories: ["../src/**/*.story.tsx"],
    webpackFinal: (config) => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: custom.module.rules
            },
            resolve: {
                ...config.resolver,
                alias: custom.resolve.alias,
                extensions: custom.resolve.extensions
            }
        }
    },
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-links",
    ],
};