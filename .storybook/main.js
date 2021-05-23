const { resolve, join } = require("path");

const toPath = _path => join(process.cwd(), _path);

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias({
  tsconfigPath = "../tsconfig.json",
} = {}) {
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};
  const basePath = toPath("src");

  Object.keys(paths).forEach(item => {
    const key = item.replace("/*", "");
    const value = resolve(
      basePath,
      paths[item][0].replace("/*", "").replace("*", "")
    );

    aliases[key] = value;
  });

  return aliases;
}

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async config => {
    const tsConfigAliases = resolveTsconfigPathsToAlias();
    config.resolve.alias = {
      ...config.resolve.alias,
      ...tsConfigAliases,
      "@chakra-ui/react": toPath("node_modules/@chakra-ui/react"),
      "@chakra-ui/layout": toPath("node_modules/@chakra-ui/layout"),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };
    console.log(config.resolve.alias);
    return config;
  },
};
