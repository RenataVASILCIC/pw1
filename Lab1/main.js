const elem = document.getElementById('elem');
/*** Aflam minim si maxim ***/
let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

const getMinMax = () => {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return {min, max}
};
const sum = () => arr.reduce((a, b) => a + b, 0);
const avg = () => (sum() / arr.length).toFixed(2);


elem.innerHTML += `Numerele: ${arr} <br>`;
elem.innerHTML += `Valoarea minimala: ${getMinMax().min} . <br>`;
elem.innerHTML += `Valoarea maximala: ${getMinMax().max} . <br>`;

/***** Aflam media ***/
elem.innerHTML += `Suma: ${sum()}.<br> Media: ${avg()} . <br>`;

/***** Sortarea *****/
elem.innerHTML += `Crescator: ${arr.sort()}. <br>  Descrescator: ${arr.reverse()}. <br>`;

/**** Rotirea *****/
const secondArray = [11, 12, 23, 24, 35, 36, 47, 48, 59, 60];
const places = 12;

const rotate = () => {
    for (let i = 0; i < places; i++) {
        secondArray.push(secondArray.shift())
    }
};

elem.innerHTML += `Exemplu: ${secondArray}. <br>`;
rotate();
elem.innerHTML += `Rotirea: ${secondArray}. <br>`;


/***** Adaugare si stergere ********/
secondArray.push(64, 75);
elem.innerHTML += `Valori adaugate: ${secondArray}. <br>`;


secondArray.splice(3, 6);
elem.innerHTML += `Valori sterse: ${secondArray}. <br>`;


