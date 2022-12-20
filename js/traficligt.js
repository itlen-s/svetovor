const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};

const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'traficligt_red',
    [LIGHTS.yellow]: 'traficligt_yellow',
    [LIGHTS.green]: 'traficligt_green',
};

const NEXT_LIGHT = {
    [LIGHTS.red]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.green,
    [LIGHTS.green]: LIGHTS.red,
};

let currentLigth = LIGHTS.red;

function switchLight()  {
    currentLigth = NEXT_LIGHT[currentLigth];
    console.log(currentLigth);
};

function initLighttraficligt(node) {
    node.classlist.add[CLASSES_BY_LIGHT[currentLigth]];
}