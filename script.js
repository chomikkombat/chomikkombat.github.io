var count = document.getElementById(`count`)
var click = document.getElementById(`click`)
var counter = parseInt(sessionStorage.getItem(`count`));

click.addEventListener(`click`, function(){
    counter += 1;
    count.textContent = counter
    sessionStorage.setItem(`count`, counter);
});

window.addEventListener("load", function (event) {
    count.textContent = counter
  });