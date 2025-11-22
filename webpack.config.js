// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.webp$/,  // Procesa archivos .webp
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
      // Opcional: agregar más formatos modernos
      {
        test: /\.avif$/,
        type: 'asset/resource', 
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      }
    ]
  }
};