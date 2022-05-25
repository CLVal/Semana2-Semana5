const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");
const no_picos = document.getElementById("no_picos");
const picudez = document.getElementById("picudez");
const color = document.getElementById("colorEs");
const relleno = document.getElementById("relleno");
const todo = document.getElementById("todo");
const espacio = document.getElementById("espacio");

// var hola = picudez.value;

var contRelleno = 0;

relleno.addEventListener("click", ()=>{
    console.log(relleno.value);
    contRelleno++;
});

todo.addEventListener("change", (evento) =>{
console
    ctx.beginPath ();
    
    const longitudLinea=400/no_picos.value*1.5;
    const anguloGradosFuera = 360 / (no_picos.value*2);
    const anguloRadianesFuera = (anguloGradosFuera* Math.PI) /180;
    let anguloFuera = anguloRadianesFuera;

    const xInicial = 170;
    const yInicial =100;
    let xNueva =  xInicial;
    let yNueva= yInicial;

    ctx.moveTo(xInicial, yInicial);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(contRelleno);
    ctx.fillstyle= color.value;
    ctx.strokestyle= color.value;  
    
    if(contRelleno%2!=0){
        
        for (let i=1; i<=(no_picos.value*2); i++){      
            
            if(i%2!=0){
                const despX = longitudLinea*Math.cos(anguloFuera);
                const despY =longitudLinea *Math.sin(anguloFuera);
                anguloFuera += anguloRadianesFuera;
                xNueva +=  despX;
                yNueva += despY;
                console.log(color.value);
                console.log(picudez.value);
                
                ctx.lineTo(xNueva, yNueva);
                
            } else {
                const despX = longitudLinea*Math.cos(anguloFuera-picudez.value);
                const despY = longitudLinea*Math.sin(anguloFuera-picudez.value);
                anguloFuera += anguloRadianesFuera;
                xNueva +=  despX;
                yNueva += despY;
                console.log(color.value);
                console.log(picudez.value);
                ctx.lineTo(xNueva, yNueva);            
                
            }
            
        }
        
        ctx.fill();
    }
    if(contRelleno%2==0){
        
        for (let i=1; i<=(no_picos.value*2); i++){ 
               
            if(i%2!=0){
                const despX = longitudLinea*Math.cos(anguloFuera);
                const despY =longitudLinea *Math.sin(anguloFuera);
                anguloFuera += anguloRadianesFuera;
                xNueva +=  despX;
                yNueva += despY;
                console.log(color.value);
                ctx.lineTo(xNueva, yNueva);
                
            } else {
                const despX = longitudLinea*Math.cos(anguloFuera-picudez.value);
                const despY = longitudLinea*Math.sin(anguloFuera-picudez.value);
                anguloFuera += anguloRadianesFuera;
                xNueva +=  despX;
                yNueva += despY;
                console.log(color.value);
                ctx.lineTo(xNueva, yNueva);            
                
            }
            
        }
        
        ctx.stroke();
    }

    ctx.closePath();

});




