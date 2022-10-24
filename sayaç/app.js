var programla =document.getElementById("programla")
var start = document.getElementById("start")
var stop = document.getElementById("stop")
var get_second=document.getElementById("get_second")
var show_second=document.getElementById("show_second")

var x;

programla.addEventListener("click",()=>{
    show_second.innerHTML=get_second.value ;

})

start.addEventListener("click",()=>{
    x=setInterval(getSecond , 1000)
    function getSecond(){
       var saniye_alma=Number(show_second.textContent)
       if (saniye_alma>0){
        saniye_alma-=1
        show_second.innerHTML=saniye_alma.toString() ;
       }
       else{
        clearInterval(x)
       }

    }
})

stop.addEventListener("click",()=>{
    clearInterval(x)
})