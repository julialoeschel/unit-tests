function getGreetin(name = 'you') {
  return `Hello ${name}!` //template literal
  //return 'hello ' + name + '!'
}

function replaceName(text, name, newName) {
  return text.replaceAll(name, newName)
}
console.log(replaceName('hello Jane skjd idid Jane', 'Jane', 'julia'))
