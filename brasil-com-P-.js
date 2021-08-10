function solucao(primeiraLetra, segundaLetra, palavras) {
	let result = ""
for (let palavra of palavras){
  if(primeiraLetra === palavra[0]){
    if(segundaLetra === palavra[1]){
     result = result + `${palavra}\n`;
      
  
    }
    
  }
}
if(result === ""){
  result = "NENHUMA";
}
console.log(result);


}
