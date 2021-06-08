import hasFlag from "https://deno.land/x/has_flag@v1.0/mod.ts"

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