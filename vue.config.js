module.exports = {
  // vagrantのforwarded_portに合わせて、devのサーバーのポートを変更する
    devServer: {
        port: 3000,
        disableHostCheck: true,
    },
};