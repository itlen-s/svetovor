const btnNode = document.querySelector('.js-btn');
const traficligtnode = document.querySelector('.js-traficligt');

initLighttraficligt(traficligtnode);

btnNode.addEventListener('click', function() {
    switchLight(traficligtnode);
});