const hrs = document.getElementById("hours");
const mins= document.getElementById("mins");
const sec = document.getElementById("sec");


setInterval(()=>{

    const currentTime=new Date();

hrs.innerText = currentTime.getHours()<10 ? "0": "" +currentTime.getHours();

mins.innerText = currentTime.getMinutes()<10 ? "0": "" +currentTime.getMinutes();;
sec.innerText = currentTime.getSeconds()<10 ? "0": "" +currentTime.getSeconds();
},1000)
