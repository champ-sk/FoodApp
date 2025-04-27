 module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: "automatic" }],
       // Add this line to support JSX
    ],
  };
  