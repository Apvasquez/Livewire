window.onload = init;
var hAux, mAux, sAux, milAux;
var hAux2, mAux2, sAux2, milAux2;
var ax , i=0;
let reg=[20];

function init(){
    
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".start").addEventListener("click",cronometrar2);
    document.querySelector(".reiniciar").addEventListener("click",vuelta);        
    h = 0;
    m = 0;
    s = 0;
    ml =0;
    h2 = 0;
    m2 = 0;
    s2 = 0;
    ml2 =0;
    document.getElementById("hms").innerHTML="00:00:00";
    document.getElementById("hms2").innerHTML="00:00:00";
    document.getElementById("hms3").innerHTML="00:00:00";    
} 
function agregarFila(){
    document.getElementById("ces").insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td>';
  }

function cronometrar(){
    escribir();    
    id = setInterval(escribir,10);    
    document.getElementById("Ini").innerHTML="PARAR";
    document.getElementById("Vuel").innerHTML="VUELTA";
    document.querySelector(".start").removeEventListener("click",cronometrar);
    document.querySelector(".start").addEventListener("click",parar);
}
function cronometrar2(){
    
    escribir2();    
    id2 = setInterval(escribir2,10);
    document.getElementById("Ini").innerHTML="PARAR";
    document.getElementById("Vuel").innerHTML="VUELTA";
    document.querySelector(".start").removeEventListener("click",cronometrar2);
    document.querySelector(".start").addEventListener("click",parar);
}
function escribir(){
    
    ml++;
    if (ml>99){s++;ml=0;}
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (ml<10){milAux="0"+ml;}else{milAux=ml;}
    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;} 

    document.getElementById("hms").innerHTML =  mAux + ":" + sAux + ":" + milAux;   
    

}
function escribir2(){
    
    ml2++;
    if (ml2>99){s2++;ml2=0;}
    if (s2>59){m2++;s2=0;}
    if (m2>59){h2++;m2=0;}
    if (h2>24){h2=0;}
    if (ml2<10){milAux2="0"+ml2;}else{milAux2=ml2;}
    if (s2<10){sAux2="0"+s2;}else{sAux2=s2;}
    if (m2<10){mAux2="0"+m2;}else{mAux2=m2;}
    if (h2<10){hAux2="0"+h2;}else{hAux2=h2;}   
    document.getElementById("hms2").innerHTML =  mAux2 + ":" + sAux2 + ":" + milAux2; 
    

}
function parar(){

    document.getElementById("Ini").innerHTML="INICIO";
    document.getElementById("Vuel").innerHTML="REINICIAR";   
    clearInterval(id);   
    clearInterval(id2);
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".start").addEventListener("click",cronometrar2);

    if(document.getElementById("Ini").innerHTML="INICIO"){
        document.querySelector(".reiniciar").removeEventListener("click",parar);
        document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    }   

}
function reiniciar(){
    clearInterval(id);
    clearInterval(id2);
    document.getElementById("hms").innerHTML="00:00:00";
    document.getElementById("hms2").innerHTML="00:00:00";
    document.getElementById("Ini").innerHTML="INICIAR";
    document.getElementById("Vuel").innerHTML="VUELTA";    
    h=0;m=0;s=0;ml=0;
    h2=0;m2=0;s2=0;ml2=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".start").addEventListener("click",cronometrar2);
    
    var div = document.getElementById('ces');
while (div.firstChild) {
    div.removeChild(div.firstChild);
}
    
    
}
function vuelta(){

    clearInterval(id2); 
    reg[i] =  "hola";
    var fila="<td>"+reg[i]+"</td>";
    var btn = document.createElement("tr");
           btn.innerHTML=fila;  
           document.getElementById("ces").appendChild(btn);    
    document.getElementById("hms2").innerHTML="00:00:00";   
    h2=0;m2=0;s2=0;ml2=0;        
    document.querySelector(".start").addEventListener("click",cronometrar2);
    cronometrar2(); 
    i++;
    
    
}



