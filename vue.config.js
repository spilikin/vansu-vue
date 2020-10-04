module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
        '^/api': {
          target: 'https://vansu.spilikin.dev',
          changeOrigin: true
        },
    }      
},

  
}