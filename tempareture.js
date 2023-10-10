const celsius = document.getElementById("celsius");
const farenheit = document.getElementById("farenheit");
const kelvin = document.getElementById("kelvin");


celsius.addEventListener("input", celciusOnInput);
farenheit.addEventListener("input", farenheitOnInput);
kelvin.addEventListener("input", kelvinOnInput);


function celciusOnInput() {
    let C = celsius.value;
    if (C !== "") {
        C = parseInt(C);
        farenheit.value = ((C * 1.8) + 32).toFixed(1);
        kelvin.value = (C + 273.15).toFixed(2);

    } else {
        farenheit.value = kelvin.value = "";
    }
}


function farenheitOnInput() {
    let F = farenheit.value;
    if (F !== "") {
        F = parseInt(F);
        celsius.value = ((F - 32) / 1.8).toFixed(2);
        kelvin.value = ((F - 32) / 1.8 + 273.15).toFixed(2);

    } else {
        celsius.value = kelvin.value = "";
    }
}

function kelvinOnInput() {
    let K = kelvin.value;
    if (K !== "") {
        K = parseInt(K);
        celsius.value = (K - 273.15).toFixed(2);
        farenheit.value = ((K - 273.15) * 1.8 + 32).toFixed(1);

    } else {
        celsius.value = farenheit.value = "";
    }
}