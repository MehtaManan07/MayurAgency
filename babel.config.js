module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@foundation': './src/foundation',
          '@db': './src/db',
          '@hooks': './src/hooks',
          '@images': './src/assets/images',
          '@lottie': './src/assets/lottie',
          '@managers': './src/managers',
          '@navigation': './src/navigation',
          '@providers': './src/providers',
          '@rive': './src/assets/rive',
          '@storage': './src/storage',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
