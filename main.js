combo1 = ["I9 10900KF", "RTX4090TI", "32GB 4000MHZ"];
combo2 = ["R7 7900X", "RX7900XD", "32GB 42000MHZ", combo1];


for(let componentes in combo2){
  if(componentes == 3){
    for(let componentes of combo1){
      break
      document.write(componentes + "<br>")
      

    }
  }else { 
    document.write(combo2[componentes] + "<br>"); 
  }
}