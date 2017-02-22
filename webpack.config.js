let webpack = require("webpack");
let path = require("path");
let env = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  env(path.join(__dirname,'app', 'config', `${process.env.NODE_ENV}.env`), {verbose: process.env.NODE_ENV==='development'});
} catch (e) {
  console.error(e);
}

let config = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['','.js','.jsx']
  },
  alias: {
    app: 'app'
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "es2016", "es2017"],
          plugins: ['transform-object-rest-spread']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production'?undefined:'source-map'
};

if(process.env.NODE_ENV==='production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }));
}

module.exports = config;