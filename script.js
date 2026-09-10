let counter = document.getElementById("counter");
let button = document.getElementById("incrementBtn");

button.addEventListener("click", function () {
    let currentValue = Number(counter.innerText);

    alert(currentValue);

    counter.innerText = currentValue + 1;
});