let modeBtn = document.querySelector("#mode");
let currMode = "light"; //dark

modeBtn.addEventListener("click" , () => {
    // console.log("you are trying to change the mode");
    if( currMode === "light"){
        currMode =" dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "red";
    }
    console.log(currMode);
});

