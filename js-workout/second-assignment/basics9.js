function puni(a){
    let nam = a;
    let sett = [...new Set(nam)];
    let res = sett.join('');

    if(res==nam){    
      console.log("The input string contains unique charecters");
    }
    else{
      console.log("The input string contains duplicates");
    }
}

puni("puneth");