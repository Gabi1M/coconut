module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx'],
        alias: {
          '@coconut': './src/@coconut',
        }
      },
    ], [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ]
  ]
};