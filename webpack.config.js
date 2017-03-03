{
  module: {
    loaders: [
      { test: /\\.jsx?$/, loader: 'babel', exclude: ['node_modules'] },
      { test: /\\.css$/,  loader: "style-loader!css-loader" },
      { test: /\\.gif$/, loader: "url-loader" },
      { test: /\\.(ttf|eot|svg)$/, loader: "file-loader" },
    ]
  },
  resolve: {
    extensions: ['', 'js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared']
    root: '/shared/vendor/modules',
    alias: {
      react: './vendor/react-master',
      config$: './configs/app-config.js',
    },
  }
}