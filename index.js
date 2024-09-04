let currstat= document.querySelector(".currstat");
let btn=document.querySelector(".btn");
let num=0;
btn.addEventListener("click",()=>{
    if(num===0){
        currstat.innerHTML="Friends";
        currstat.style.color="green";
btn.innerHTML="Remove";
btn.classList.remove("changeBtnClr1");
btn.classList.add("changeBtnClr2");


num=1;
    }
    else{
        currstat.innerHTML="Stranger";
        currstat.style.color="red";
btn.innerHTML="Add";

btn.classList.add("changeBtnClr1");
btn.classList.remove("changeBtnClr2");

num=0;

    }
})