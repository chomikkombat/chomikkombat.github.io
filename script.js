var count = document.getElementById(`count`)
const click = document.getElementById(`click`)
var counter = parseInt(localStorage.getItem(`count`));

// сохранение
if (sessionStorage.getItem(`count`)) {
    var counter = parseInt(localStorage.getItem(`count`));
    count.textContent = counter
}
else {
    var counter = 0
}

// клик
click.addEventListener(`click`, function(){
    // анимация
    click.classList.add('animate');
    setTimeout(() => {
        click.classList.remove('animate');
    }, 100);
    // ...
    window.navigator.vibrate(200);
    if (counter >= 500) {
        counter += 2;
    } else {
        counter += 1;
    }
    count.textContent = counter
    localStorage.setItem(`count`, counter);
});