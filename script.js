var count = document.getElementById(`count`)
const click = document.getElementById(`click`)
var counter = parseInt(localStorage.getItem(`count`));
var progressBar = document.getElementById(`progress-bar`)
var notify = document.getElementById(`notify`)
let upgrade = 1;

notify.style.visibility = "hidden"

// сохранение

if (localStorage.getItem(`count`)) {
    var counter = parseInt(localStorage.getItem(`count`));
    count.textContent = counter;

if (localStorage.getItem(`count`)) {
    var counter = parseInt(localStorage.getItem(`count`));
    count.textContent = counter

}
else {
    var counter = 0;
}

// клик
click.addEventListener(`click`, function(event) {
    // анимация
    click.classList.add('animate');
    setTimeout(() => {
        click.classList.remove('animate');
    }, 100);
    // ...
    window.navigator.vibrate(200);
    counter += upgrade;
    if (counter % 1000 === 0) {
        upgrade += 1;
        notify.style.visibility = "visible"
        notify.classList.add('animate');
        setTimeout(() => {
            notify.classList.remove('animate');
            notify.style.visibility = "hidden"
        }, 500);
    }
    count.textContent = counter
    localStorage.setItem(`count`, counter);
})};