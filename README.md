# sample-vue-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vagrant用にポート変更
vue.config.jsを追加してポート番号を変更する

```
  module.exports = {
    devServer: {
        port: 3000,
        disableHostCheck: true,
    },
};
```
