auto start script
```js
window.__SPYAUTOSTART=true;fetch('https://raw.githubusercontent.com/yusa-imit/rsckf/refs/heads/main/spyv2.min.js').then(v=>v.text()).then(eval);
```

manual start script
```js
fetch('https://raw.githubusercontent.com/yusa-imit/rsckf/refs/heads/main/spyv2.min.js').then(v=>v.text()).then(eval);
```

##### available phases
- phase1
- phase2
- phase3
- phase4
- phase5

##### available functions
- init
- modifySetTimeout
- registerSetTimeoutIgnore
- startPhase
- end
