function solucao(cor1, cor2) {
	let resultado;
if (cor1 === cor2){
  resultado = cor1;
  
} else if (cor1 === "azul" && cor2 === "amarelo" || cor1 === "amarelo" && cor2 === "azul"){
  resultado = "verde"
  
}else if (cor1 === "azul" && cor2 === "vermelho" || cor1 === "vermelho" && cor2 === "azul"){
  resultado = "roxo";
  
}else if (cor1 === "amarelo" && cor2 === "vermelho" || cor1 === "vermelho" && cor2 === "amarelo"){
  resultado = "laranja";
  
}
console.log(resultado);
}
