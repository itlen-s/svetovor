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

function switchLight(node)  {
    const currentClass = CLASSES_BY_LIGHT[currentLigth];
    const nextlight = NEXT_LIGHT[currentLigth];
    const nextClass = CLASSES_BY_LIGHT[nextlight];

    currentLigth = NEXT_LIGHT[currentLigth];

    node.classList.replace(currentClass, nextClass);
};

function initLighttraficligt(node) {
    node.classList.add(CLASSES_BY_LIGHT[currentLigth]);
}