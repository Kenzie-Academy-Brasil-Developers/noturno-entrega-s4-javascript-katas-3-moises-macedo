const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(arr, titulo){
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = " "

    const tituloResultado = document.createElement('h2');
    tituloResultado.innerHTML = titulo;

    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = `${arr.join(', ')}.`

    resultados.appendChild(tituloResultado);
    resultados.appendChild(paragrafo);

       
    
    

    


    
}





function kata1() {
    // implemente o código do kata 1 aqui
    let i = [];

    for (let contador=1; contador <= 25; contador++){
        i.push(contador);
    }
    showResults(i, 'kata1')
   
}
const botaoKata1 = document.getElementById('kata1');
botaoKata1.addEventListener('click', kata1)




   
function kata2() {
    // implemente o código do kata 2 aqui
    let i = [];

    for (let contador=25; contador >= 1; contador--){
        i.push(contador);
    }
    showResults(i, 'kata2')
    
  }
const botaoKata2 = document.getElementById('kata2');
botaoKata2.addEventListener('click', kata2)
  
  



function kata3() {
    // implemente o código do kata 3 aqui
    let i = [];

    for (let contador=-1; contador >= -25; contador--){
        i.push(contador);
    }
    showResults(i, 'kata3')
    
}
const botaoKata3 = document.getElementById('kata3');
botaoKata3.addEventListener('click', kata3)


function kata4() {
    // implemente o código do kata 4 aqui
    let i = [];

    for (contador=-25; contador <=-1; contador++){
        i.push(contador);
    }

    showResults(i,'kata4')
    
}
const botaoKata4 = document.getElementById('kata4');
botaoKata4.addEventListener('click', kata4)

function kata5() {
    // implemente o código do kata 5 aqui
    let i =[];

    for(contador=25; contador>=-25; contador--){

        i.push(contador);
    }
    showResults(i,'kata5')
    
}
const botaoKata5 = document.getElementById('kata5');
botaoKata5.addEventListener('click', kata5)


function kata6() {
    // implemente o código do kata 6 aqui
    let i =[];

    for(contador=3; contador<=100; contador++){

        if( contador % 3 ===0)

        i.push(contador);
    }
    showResults(i,'kata6')
   
}
const botaoKata6 = document.getElementById('kata6');
botaoKata6.addEventListener('click', kata6)


function kata7() {
    // implemente o código do kata 7 aqui
    let i =[];

    for(contador=7; contador<=100; contador++){

        if( contador % 7 ===0)

        i.push(contador);
    }
    showResults(i,'kata7')
  

}
const botaoKata7 = document.getElementById('kata7');
botaoKata7.addEventListener('click', kata7)



function kata8() {
    // implemente o código do kata 8 aqui
    let i =[];
    let x =[];

    for(contador=100; contador>=3; contador--){

        if( contador % 3 ===0 || contador % 7==0)

        i.push(contador);
    }
    
    
    showResults(i,'kata8')
   
}
const botaoKata8 = document.getElementById('kata8');
botaoKata8.addEventListener('click', kata8)


function kata9() {
    // implemente o código do kata 9 aqui
    let i =[];

    for(contador=5; contador<=100; contador++){

        if( contador % 5 ===0 && contador % 2 !==0 )

        i.push(contador);
    }
    showResults(i,'kata9')
    
}

const botaoKata9 = document.getElementById('kata9');
botaoKata9.addEventListener('click', kata9)

function kata10() {
    // implemente o código do kata 10 aqui
    let i = [];

    for(let contador = 0; contador <sampleArray.length; contador++){

        i.push(sampleArray[contador])
    }
    showResults(i, "kata10")

}
const botaoKata10 = document.getElementById('kata10');
botaoKata10.addEventListener('click', kata10)


function kata11() {
    // implemente o código do kata 11 aqui
    let i = []

    for(let contador=0; contador<sampleArray.length; contador++)            
               
            {
                if (sampleArray[contador] % 2 == 0)
        
                {i.push(sampleArray[contador]) }
        
            }
  
    showResults(i, "kata11")
    
}
const botaoKata11 = document.getElementById('kata11');
botaoKata11.addEventListener('click', kata11)


function kata12() {
    // implemente o código do kata 12 aqui
    let i = [];

    for(let contador=0; contador<sampleArray.length; contador++)            
               
            {
                if (sampleArray[contador] % 2 !== 0)
        
                {i.push(sampleArray[contador]) }
        
            }
    
        
    showResults(i, "kata12") 
   
    
}
const botaoKata12 = document.getElementById('kata12');
botaoKata12.addEventListener('click', kata12)


function kata13() {
    // implemente o código do kata 13 aqui
    let i = [];

    for(let contador=0; contador<sampleArray.length; contador++)            
               
            {
                if (sampleArray[contador] % 8 == 0)
        
                {i.push(sampleArray[contador]) }
        
            }
    
        
    showResults(i, "kata13") 
    
}
const botaoKata13 = document.getElementById('kata13');
botaoKata13.addEventListener('click', kata13)


function kata14() {
    // implemente o código do kata 14 aqui
    let i = [];

    for(let contador=0; contador<sampleArray.length; contador++)

            {i.push((sampleArray[contador])**2)}
    
         
    showResults(i, "kata14") 
    
}
const botaoKata14 = document.getElementById('kata14');
botaoKata14.addEventListener('click', kata14)

function kata15() {
    // implemente o código do kata 15 aqui
   
}


function kata16() {
    // implemente o código do kata 16 aqui
}

function kata17() {
    // implemente o código do kata 17 aqui
    
   
}


function kata18() {
    // implemente o código do kata 18 aqui
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
