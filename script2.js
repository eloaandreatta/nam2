function sim() {
    alert("Você aceitou namorar comigo! :)");
    // redireciona para um URL após clicar no SIM
    location.href = "https://youtu.be/izGwDsrQ1eQ";
}

function não() {
    alert("belessa mano voce vai precisar de mim ainda belessa *emoji chorando*");
    // redireciona para um URL após clicar no NÃO
    location.href = "https://youtu.be/1OA6J8aTGuo";
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

/* Apague se quiser, isso apenas escreve MTHS1901 e o link para o tutorial no console */
const o = "MTHS1901", e = 90, l = "bold"; console.log(`%c${o}`, "font-size: 90px; font-weight: bold; background: linear-gradient(90deg, red, yellow);"), console.log("Tutorial: https://www.youtube.com/watch?v=zxxB9SFh9p4");
