# qclog
区分development和prod ; 开发环境console.log正常打印，生产打印为...

## install
```
yarn add qclog
```

## use

```
import QCLog from "qclog";
...
if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$clog = QCLog.getInstance("development");
} else {
  Vue.prototype.$clog = QCLog.getInstance("prod");
}
...
this.$clog.log("123")
```