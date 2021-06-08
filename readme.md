# has-flag
> 检测运行参数中包含指定参数
  
遇到 `--` 参数时，忽略后面的参数

## Install
```
import hasFlag from "https://raw.githubusercontent.com/IT-Pianist/has-flag/main/mod.ts"
```

## Usage

```ts
console.log(hasFlag('unicorn'))
//=> true

console.log(hasFlag('--unicorn'))
//=> true

console.log(hasFlag('f'))
//=> true

console.log(hasFlag('-f'))
//=> true

console.log(hasFlag('foo=bar'))
//=> true

console.log(hasFlag('foo'))
//=> false

console.log(hasFlag('rainbow'))
//=> false
```


```
deno run --inspect-brk -A test.ts -f --unicorn --foo=bar -- --rainbow 
```

## API


## License
MIT © [IT-Pinaist]
