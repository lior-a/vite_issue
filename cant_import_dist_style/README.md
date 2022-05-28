# can't import styles

```
// import 'node_modules/@test/ui/dist/styles.css'; // <-- doesn't work
import '/node_modules/@test/ui/dist/styles.css'; // <-- works! 
// import './node_modules/@test/ui/dist/styles.css'; /// <--- doesn't work!
```

1. pull repo
2. run npm dev
3. go to App.tsx lines 10-12 and comment/un comment the ones  that works/don't works

important!
the node_modules is commited since i fake-created the `@test/ui` pacakge.
