function celcius() {
    let celcius = document.getElementById('entrada').value;
    celcius = (celcius * 1.8) + 32;
    document.getElementById('resultado').textContent = celcius
}