御用 [ESLint](http://eslint.org/) 配置共享包

---

## 安装配置共享包

```sh
$ npm i -S eslint-config-pwn
```

## 启用配置共享包

### `package.json`

```
{
  eslintConfig: {
    extends: 'pwn'
  }
}
```

### `.eslintrc.js`

```
module.exports = {
  extends: 'pwn'
}
```
