module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          api: './src/api',
          components: './src/components',
          modals: './src/modals',
          routes: './src/routes',
          screens: './src/screens',
          shared: './src/shared',
          store: './src/store',
        },
      },
    ],
  ],
};
