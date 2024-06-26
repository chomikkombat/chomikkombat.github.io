var count = document.getElementById(`count`);
var click = document.getElementById(`click`);
var counter = parseInt(localStorage.getItem(`count`));

if (localStorage.getItem(`count`)) {
    var counter = parseInt(localStorage.getItem(`count`));
    count.textContent = counter
}
else {
    var counter = 0
}

click.addEventListener(`click`, function(){
    counter += 1
    count.textContent = counter
    localStorage.setItem(`count`, counter);
});
