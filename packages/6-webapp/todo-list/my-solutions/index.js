document.querySelector('#new-task').addEventListener('click', () => {
  const myTask =  document.getElementById("input").value;
  const newli = document.createElement("li");
  const element = document.getElementById("mylist");
  element.appendChild(newli).innerHTML = myTask
  document.getElementById("input"). value = ""

})