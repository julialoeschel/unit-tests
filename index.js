import { getGreetin } from './getGreeting.js'
import { replaceName } from './replaceName.js'

console.log(
  replaceName(
    'hello Jane, sometest text and another name: Fixi',
    'Jane',
    'julia'
  )
)
console.log(getGreeting('juju'))
