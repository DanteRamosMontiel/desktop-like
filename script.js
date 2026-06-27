const terminalWindow = document.querySelector(".terminal-window");
const terminalIcon = document.querySelector(".terminal-icon");
const todolistIcon = document.querySelector(".todolist-icon");
const scrollAnimationIcon = document.querySelector(".scrollanimation-icon");
const closeButton = document.querySelector(".close-button");

const projectBlock = document.querySelector("#project-block");
const homeBlock = document.querySelector("#home-block");

const cmd = document.querySelector(".cmd");
const entryLabel = document.querySelector(".entry-label");
const metaVal = document.querySelector(".meta-val");
const lnkDemo = document.querySelector(".lnk-demo");
const lnkRepo = document.querySelector(".lnk-repo");

const projects = {
    todolist:{
        cmd: "cat easyToDoList.txt",
        entrylabel: "EasyToDoList",
        metaVal: "Basic interactive to-do list implemented with DOM and events in JavaScript.",
        lnkDemo: "https://drmtestplace.com/EasyToDoList/",
        lnkRepo: "https://github.com/DanteRamosMontiel/MinimalistToDoList"
    },

    animation:{
        cmd: "cat 3dScrollAnimation.txt",
        entrylabel: "3dScrollAnimation",
        metaVal: "A simple landing page that includes a 3d animation that works on user scroll.",
        lnkDemo: "https://drmtestplace.com/scroll-animation/",
        lnkRepo: "https://github.com/DanteRamosMontiel/3dScrollAnimationV1"
    }
};

function reCenter(){
    terminalWindow.style.display = "block";
    terminalWindow.style.top = "50%";
    terminalWindow.style.left = "50%";
    terminalWindow.style.transform = "translate(-50%, -50%)";
}

function reWrite(element){
    cmd.textContent = element.cmd;
    entryLabel.textContent = element.entrylabel;
    metaVal.textContent = element.metaVal;
    lnkDemo.href = element.lnkDemo;
    lnkRepo.href = element.lnkRepo;
}


let actual = -1;

function change(movement){
    if (movement === actual) return;
    
    if(movement === 0){
        projectBlock.style.display = "none";
        homeBlock.style.display = "block";
        actual = 0;
    }else if (movement === 1){
        projectBlock.style.display = "block";
        homeBlock.style.display = "none";
        actual = 1;
    }
    
}


terminalIcon.addEventListener("click", () => {
    reCenter();
    change(0);
});

scrollAnimationIcon.addEventListener("click", () => {
    reCenter();
    reWrite(projects.animation);
    change(1);
});

todolistIcon.addEventListener("click", () => {
    reCenter();
    reWrite(projects.todolist);
    change(1);
});


closeButton.addEventListener("click", () => {
    terminalWindow.style.display = "none";
});

let mantiene = false;

let startMouseX;
let startMouseY;

let startWindowX;
let startWindowY;

terminalWindow.addEventListener("mousedown", (e) => {
    if(e.target.classList.contains("titlebar")){
        mantiene = true;

        startMouseX = e.clientX;
        startMouseY = e.clientY;

        startWindowX = terminalWindow.offsetLeft;
        startWindowY = terminalWindow.offsetTop;
    }
});

document.addEventListener("mousemove", (e) => {
    if (!mantiene) return;

    const deltaX = e.clientX - startMouseX;
    const deltaY = e.clientY - startMouseY;

    terminalWindow.style.left = startWindowX + deltaX + "px";
    terminalWindow.style.top = startWindowY + deltaY + "px";
});

document.addEventListener("mouseup", () => {
    mantiene = false;
});