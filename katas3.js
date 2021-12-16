const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(result){
       
    const novoParagrafo = document.createElement("p");
    const texto = document.createTextNode("Resultado do Kata é " +  result);
    novoParagrafo.appendChild(texto);
    const div = document.querySelector("div");
    div.appendChild(novoParagrafo)
    

    


    
}





function kata1() {
    // implemente o código do kata 1 aqui
    const novoParagrafo = document.createElement("p");
  
        let i= [];   
    
    
    for (let contador= 1; contador <=25; contador ++){
        if (contador % 1 ===0) {
            i.push(contador)
            
        }
   
    
  }
  
  showResults(i,"kata1")
}
kata1()



   
function kata2() {
    // implemente o código do kata 2 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= 25; contador >=1; contador --){
        
        if (contador % 1 ===0) {
            i.push(contador)
            
        }
   
    
  }
  
  showResults(i, "kata2")
}
kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= -1; contador >=-25; contador --){
        
        if (contador % 1 ===0) {
            i.push(contador)
            
        }
   
    
  }
  
  showResults(i, "kata3")
}
kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= -25; contador <=-1; contador++ ){
        
        if (contador % 1 ===0) {
            i.push(contador)
                       
        }
       
  }
  
  showResults(i, "kata4")
}
kata4()

function kata5() {
    // implemente o código do kata 5 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= 25; contador >=-25; contador --){
        
        if (contador % 2 !==0) {
            i.push(contador)
            
        }
   
    
  }
  
  showResults(i, "kata5")
}
kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= 3; contador <=100; contador++){
        
        if (contador  % 3 ===0) {
            i.push(contador)
            
        }
   
    
  }
  showResults(i, "kata6")
}
kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= 7; contador <=100; contador++){
        
        if (contador  % 7 ===0) {
            i.push(contador)
            
        }
   
    
  }
  showResults(i, "kata7")

}
kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= 100; contador >=7; contador--){
        
        if (contador  % 7 ===0) {
            i.push(contador)
            
        }
   
    
  }
  showResults(i, "kata8")
}
kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    const novoParagrafo = document.createElement("p");
    
    let i= [];
    
    
    
    for (let contador= 5; contador <=100; contador++){
        
        if (contador  % 5 ===0) {
            i.push(contador)
            
        }
   
    
  }
  showResults(i, "kata9")
}
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
}

function kata11() {
    // implemente o código do kata 11 aqui
}

function kata12() {
    // implemente o código do kata 12 aqui
}

function kata13() {
    // implemente o código do kata 13 aqui
}

function kata14() {
    // implemente o código do kata 14 aqui
}

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
