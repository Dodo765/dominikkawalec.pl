let Loader = document.querySelector(".loader"),
Page = document.querySelector(".page"),
StatusBar = document.querySelector(".loader-progress-bar-on"),
Value = document.querySelector(".loader-value");

let progressStart = 0,    
progressEnd = 100,    
delay = 10;

Loader.classList.remove("hidden");
Page.classList.add("hidden");

let progress = setInterval(() => {
    progressStart++;

    Value.textContent = `${progressStart}%`;
    StatusBar.style.width = `${progressStart*2}px`;
    
    if(progressStart == progressEnd){
        clearInterval(progress);
    }    
    }, delay);

    Page.classList.remove("hidden");
    Loader.classList.add("hidden");