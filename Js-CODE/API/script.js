const URL="https://cat-fact.herokuapp.com/facts";
//fatch return a value and these value is going to be promises.
 const cataData = document.querySelector(".Catfact");
 const btn = document.querySelector(".btn");
 
const getFact= async()=>{
    console.log("getting  data......");
    let response= await fetch(URL);
    console.log(response);// JSON Formate
   var OriginalData= await response.json();
//    console.log(OriginalData);// Readible data
//    console.log(OriginalData[0]);
//    console.log(OriginalData[0].text);
      cataData.innerText = OriginalData[2].text;   
}
btn.addEventListener("click",getFact);