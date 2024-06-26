var count = document.getElementById(`count`);
var click = document.getElementById(`click`);
var counter = parseInt(sessionStorage.getItem(`count`));

if (sessionStorage.getItem(`count`)) {
    var counter = parseInt(sessionStorage.getItem(`count`));
    count.textContent = counter
}
else {
    var counter = 0
}

click.addEventListener(`click`, function(){
    counter += 1
    count.textContent = counter
    sessionStorage.setItem(`count`, counter);
});
