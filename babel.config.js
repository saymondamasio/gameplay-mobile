module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxRuntime: 'automatic',
          native: {
            useTransformReactJSXExperimental: false,
          },
        },
      ],
    ],
    plugins: ['react-native-reanimated/plugin'],
  }
}
