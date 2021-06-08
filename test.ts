import hasFlag from "https://raw.githubusercontent.com/IT-Pianist/has-flag/main/mod.ts"

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