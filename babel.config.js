module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/transform-runtime',
  ]
}
