import { getGreetin } from './getGreetin.js'
import { replaceName } from './replaceName.js'

console.log(
  replaceName(
    'hello Jane, sometest text and another name: Jane',
    'Jane',
    'julia'
  )
)
console.log(getGreetin())
