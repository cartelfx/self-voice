## self voice

array içinde belirtilen tokenlerin ses kanalına toplu şekilde giriş yapmasını sağlar, hesap tokeninizi almak için aşağıdaki kodu https://discord.com/ sayfasında console'ye yapıştırarak tokeninizi kopyalayabilirsiniz.


```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    if (!req.c) return;
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```


## Kurulum
öncelikle terminal açıp ```npm install``` yazarak modülleri indirin, daha sonra ```npm start``` yazarak sistemi başlatın.
