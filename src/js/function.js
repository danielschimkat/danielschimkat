// Definition der Elemente
const SVGLOGO = document.getElementById('logo');
const ARROW = document.getElementsByClassName('arrow');

//Definition Variablen
const LOGOLENGTH = SVGLOGO.getTotalLength();

//Basic Settings
SVGLOGO.style.strokeDasharray = LOGOLENGTH;
SVGLOGO.style.strokeDashoffset = LOGOLENGTH;

//Funktion zum zeichnen des Pfads
const drawWhenScroll = () => {
    const DRAWLOGO = LOGOLENGTH * calcScrollPercent();
    SVGLOGO.style.strokeDashoffset = LOGOLENGTH - DRAWLOGO;
    if(calcScrollPercent() === 1){
        SVGLOGO.style.fill = '#ED8936';
    } else {
        SVGLOGO.style.fill = 'transparent';
    }
    if(calcScrollPercent() <= 0.2){
        ARROW.style.opacity = '1';
    } else {
        ARROW.style.opacity = '0';
    }

}

//Funktion um %-Wert zu errechnen
const calcScrollPercent = () => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return document.documentElement.scrollTop/height;
}

//Scroll-trigger
window.addEventListener('scroll', drawWhenScroll);



/*import Typed from 'typed.js';

var typed = new Typed('#typed', {
    strings: ['An Electrical Engineer','A Coder', 'A Tinkerer' ],
    typeSpeed: 80,
    backDelay: 750,
    loop: true
});
*/