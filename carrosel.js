function solucao(sequencia) {
	

    
    let result = 0;
for(let item of sequencia){
   if(item === ">"){
     if(result === 6){
       result = 0;
     }else {
          result++
     }

  
   }else if (item === "<"){
     if(result === 0){
       result = 6;
     }else{
       result--;
     }
     
   }
  
}
console.log(result);
}
