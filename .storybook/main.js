    module.exports = {
    stories: ["../src/**/*.story.tsx"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-actions",
        "@storybook/addon-links",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        }
    ]
};
