let HtmlStatusBarOn = document.querySelector(".code-html-stat-bar-on"),
progressValueHtml = document.querySelector(".html-val");

let CssStatusBarOn = document.querySelector(".code-css-stat-bar-on"),
progressValueCss = document.querySelector(".css-val");

let JsStatusBarOn = document.querySelector(".code-js-stat-bar-on"),
progressValueJs = document.querySelector(".js-val");

let ArdStatusBarOn = document.querySelector(".code-ard-stat-bar-on"),
progressValueArd = document.querySelector(".ard-val");

let CppStatusBarOn = document.querySelector(".code-cpp-stat-bar-on"),
progressValueCpp = document.querySelector(".cpp-val");


let progressStartValueHtml = 0,    
progressEndValueHtml = 80,    
speedHtml = 25;

let progressStartValueCss = 0,    
progressEndValueCss = 70,    
speedCss = 28;

let progressStartValueJs = 0,    
progressEndValueJs = 30,    
speedJs = 66;

let progressStartValueArd = 0,    
progressEndValueArd = 60,    
speedArd = 33;

let progressStartValueCpp = 0,    
progressEndValueCpp = 50,    
speedCpp = 40;


let progressHtml = setInterval(() => {
    progressStartValueHtml++;

    progressValueHtml.textContent = `${progressStartValueHtml}%`
    HtmlStatusBarOn.style.width = `${progressStartValueHtml*2}px`
    
    if(progressStartValueHtml == progressEndValueHtml){
        clearInterval(progressHtml);
    }    
    }, speedHtml);

let progressCss = setInterval(() => {
    progressStartValueCss++;

    progressValueCss.textContent = `${progressStartValueCss}%`
    CssStatusBarOn.style.width = `${progressStartValueCss*2}px`
    
    if(progressStartValueCss == progressEndValueCss){
        clearInterval(progressCss);
    }    
    }, speedCss);

let progressJs = setInterval(() => {
    progressStartValueJs++;

    progressValueJs.textContent = `${progressStartValueJs}%`
    JsStatusBarOn.style.width = `${progressStartValueJs*2}px`
    
    if(progressStartValueJs == progressEndValueJs){
        clearInterval(progressJs);
    }    
    }, speedJs);

let progressArd = setInterval(() => {
    progressStartValueArd++;

    progressValueArd.textContent = `${progressStartValueArd}%`
    ArdStatusBarOn.style.width = `${progressStartValueArd*2}px`
    
    if(progressStartValueArd == progressEndValueArd){
        clearInterval(progressArd);
    }    
    }, speedArd);

let progressCpp = setInterval(() => {
    progressStartValueCpp++;

    progressValueCpp.textContent = `${progressStartValueCpp}%`
    CppStatusBarOn.style.width = `${progressStartValueCpp*2}px`
    
    if(progressStartValueCpp == progressEndValueCpp){
        clearInterval(progressCpp);
    }    
    }, speedCpp);
