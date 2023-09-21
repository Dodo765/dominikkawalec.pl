let circularProgress1 = document.querySelector(".circular-progress1"),
progressValue1 = document.querySelector(".progress-value1");

let circularProgress2 = document.querySelector(".circular-progress2"),
progressValue2 = document.querySelector(".progress-value2");

let circularProgress3 = document.querySelector(".circular-progress3"),
progressValue3 = document.querySelector(".progress-value3");




let progressStartValue1 = 0,    
progressEndValue1 = 100,    
speed1 = 20;

let progressStartValue2 = 0,    
progressEndValue2 = 85,    
speed2 = 24;

let progressStartValue3 = 0,    
progressEndValue3 = 10,    
speed3 = 200;



let progress1 = setInterval(() => {
progressStartValue1++;

progressValue1.textContent = `${progressStartValue1}%`
circularProgress1.style.background = `conic-gradient(var(--yellow) ${progressStartValue1 * 3.6}deg, var(--grey) 0deg)`

if(progressStartValue1 == progressEndValue1){
    clearInterval(progress1);
}    
}, speed1);


let progress2 = setInterval(() => {
progressStartValue2++;

progressValue2.textContent = `${progressStartValue2}%`
circularProgress2.style.background = `conic-gradient(var(--yellow) ${progressStartValue2 * 3.6}deg, var(--grey) 0deg)`

if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
}    
}, speed2);


let progress3 = setInterval(() => {
progressStartValue3++;
        
progressValue3.textContent = `${progressStartValue3}%`
circularProgress3.style.background = `conic-gradient(var(--yellow) ${progressStartValue3 * 3.6}deg, var(--grey) 0deg)`
        
if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
}    
}, speed3);
