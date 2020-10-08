module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
        '^/api': {
          target: 'https://api.globex.spilikin.dev',
          changeOrigin: true
        },
    }      
},

  
}