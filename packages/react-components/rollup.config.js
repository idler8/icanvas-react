import babel from 'rollup-plugin-babel';

export default [
  {
    // 核心选项
    input: './src/index.js', // 入口文件
    output: [
      {
        file: './libs/index.es.js', // 出口文件
        format: 'es', // commonjs 规范
      }
    ],
    external: [ 'react' ],
    plugins: [ babel({ runtimeHelpers: true }) ]
  },
  {
    // 核心选项
    input: './src/index.js', // 入口文件
    output: {
      file: './libs/index.umd.js', // 出口文件
      format: 'umd', // commonjs 规范
      name: 'ReactICanvasComponents',
      globals: { 'react': 'react' }
    },
    external: [ 'react' ],
    plugins: [ babel({ runtimeHelpers: true }) ]
  }
];