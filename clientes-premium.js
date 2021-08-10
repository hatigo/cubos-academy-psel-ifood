function solucao(precos) {
    //seu codigo aqui
let soma = 0;
let itemcaro;
for (let item of precos){
  if(item > 200){
    itemcaro = true ;
  }
  soma = soma + item;
}
if(soma > 1000){
  if(itemcaro == true){
  console.log("PREMIUM");
  }else {
    console.log("VIP")
  }
} 
else {
  console.log("NORMAL");
}

}