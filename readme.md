
![](https://www.chuchur.com/2018-7-2/kui-react.jpg)
### 一枚前端UI 组件库 for React

在追求完美视觉体验的同时也保证了其性能高效。

欢迎使用 、批评、指正、吐槽、[Star](https://github.com/chuchur/kui-react) 

### 特性   
漂亮的UI，可定制主题   
兼容IE9+   
组件丰富，功能强大

### 更新日志
logs：[https://react.k-ui.xyz/log](https://react.k-ui.xyz/log)

#### 文档
Docs : [https://react.k-ui.xyz](https://react.k-ui.xyz)
Github: [https://github.com/chuchur/kui-react](https://github.com/chuchur/kui-react)

#### 安装
```
npm install react-kui
```

#### 使用

```js
import React from 'react'
import Render from 'react-dom'
import { Button } from 'react-kui'
import 'react-kui/dist/k-ui.css'

Render.render(<Button type="primary"></Button>,document.getElementById('app'))