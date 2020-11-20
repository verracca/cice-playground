var value = prompt("Elige A, B o C y te mostrare el archivo correspondiente");

(async function () {
  const module = await import(`./${value}.js`)
  console.warn(module.value())
})()

