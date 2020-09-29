
fetch("../html/homepage.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("#root").innerHTML = data;
});
