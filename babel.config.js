module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          cwd: 'babelrc',
          extensions: ['.ts', '.tsx'],
          alias: {
            '@reddit': './src/@reddit'
          }
        }
      ],
    ]
  };