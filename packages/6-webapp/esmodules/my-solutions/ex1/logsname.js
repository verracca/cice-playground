export async function loadJavaScript() {
  var value = prompt("Choose a, b o c and I show you the file");
  await import(value + ".js");
}
