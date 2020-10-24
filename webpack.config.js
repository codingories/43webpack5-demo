module.exports = {
  mode: 'production',
  entry: {a:'./src/a.js',b:'./src/b.js'},
  output: {
    filename: '[name]-[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      minSize: 1,
      chunks(chunk){
        return !['wangzuxian'].includes(chunk.name)
      },
      name: 'commons'
    }
  }
}
