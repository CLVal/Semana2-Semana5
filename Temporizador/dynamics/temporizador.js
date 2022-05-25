const aceptar = document.getElementById("aceptar");
const detener = document.getElementById("detener");
const iniciar = document.getElementById("iniciar");
const minutos = document.getElementById("minu");
const segundos = document.getElementById("segu");
const tiempo = document.getElementById("tiempo");
const alarma = new Audio ("./statics/media/elmo.mp3")

console.log(minutos.value)
console.log(segundos.value)



aceptar.addEventListener("click", (evento)=>{
    if(minutos.value < 0 || minutos.value == ''){
        minutos.value = 00;
    }
    if(segundos.value < 0 || segundos.value == ''){
        segundos.value = 00;
    }
    if(minutos.value > 59){
        minutos.value = 59;
    }
    if(segundos.value >59){
        segundos.value = 59;
    }
    if(segundos.value < 10 && minutos.value > 9){
        tiempo.innerHTML= minutos.value+':0'+segundos.value;
    }
    if(segundos.value > 9 && minutos.value < 10){
        tiempo.innerHTML= '0'+minutos.value+':'+segundos.value;
    }
    if(segundos.value < 10 && minutos.value < 10){
        tiempo.innerHTML= '0'+minutos.value+':0'+segundos.value;
    }
    if(segundos.value > 9 && minutos.value > 9){
        tiempo.innerHTML= minutos.value+':'+segundos.value;
    }
});

let cero = 0;
let contMin = 0;

iniciar.addEventListener("click", (evento)=>{
    // if((minutos.value!=0 && segundos.value!=0) || (minutos.value!=0 && segundos.value>=0) || (minutos.value==0 && segundos.value>=0)){
        
        var correSeg = setInterval(()=>{
        
            if(segundos.value==0 && minutos.value==0){
                console.log("entras?");
                clearInterval(correSeg);
                cero = 0;
                alarma.volume=.2;
                alarma.play();
            }

            if(segundos.value == 0 && minutos.value > 0)
            {
                segundos.value=60;
                minutos.value--;
            }
            if(minutos.value >= 0 && segundos.value !=0){
                segundos.value--
            }
            

            if(segundos.value < 10 && minutos.value > 9){
                tiempo.innerHTML= minutos.value+':0'+segundos.value;
            }
            if(segundos.value > 9 && minutos.value < 10){
                tiempo.innerHTML= '0'+minutos.value+':'+segundos.value;
            }
            if(segundos.value < 10 && minutos.value < 10){
                tiempo.innerHTML= '0'+minutos.value+':0'+segundos.value;
            }
            if(segundos.value > 9 && minutos.value > 9){
                tiempo.innerHTML= minutos.value+':'+segundos.value;
            }
            
        }, 1000);

        

        detener.addEventListener("click", (evento) =>{
            clearInterval(correSeg);
        });

       
    
});
 

