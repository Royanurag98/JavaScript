let btn=document.querySelector("#btn");
let box=document.querySelector("#box");
let currentMode="light";

btn.addEventListener("click",() => {
    if (currentMode === "light"){
        currentMode = "dark";
       box.classList.add("dark");
       box.style.backgroundColor="black";
       box.classList.remove("light");
       console.log("dark");
    }  
    else {
       currentMode = "light";
       box.classList.add("light");
       box.style.backgroundColor="rgb(87, 81, 81)";
       box.classList.remove("dark");
       console.log("light");
       
    }   
});
 

