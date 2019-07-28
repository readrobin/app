module.exports = (api) => {
  api.cache.forever();

  const common = {
    presets: [
      '@babel/react',
      [
        '@babel/typescript',
        {
          isTSX: true,
          allExtensions: true
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          root: ['./']
        }
      ]
    ]
  };

  const server = {};
  const frontend = {};

  return {
    plugins: [...common.plugins],
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          targets: '> 0.25%, not dead',
          useBuiltIns: 'usage',
          corejs: 3
        }
      ],
      ...common.presets
    ]
  };
};
