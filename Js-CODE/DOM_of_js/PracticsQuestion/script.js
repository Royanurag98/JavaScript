let btn=document.createElement("button");
btn.innerText="Click Me";
let body=document.querySelector("body");
btn.style.backgroundColor="red";
btn.style.color="White";
btn.style.border="2px solid black";
btn.style.borderRadius="10px";

body.prepend(btn);