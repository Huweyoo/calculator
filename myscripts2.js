
    // function
    function concat() {
    // console log 
    console.log(parseInt(document.getElementById("output").value =  document.getElementById("fnum").value +  document.getElementById("snum").value));
    // operator / output
    document.getElementById("output").value =  document.getElementById("fnum").value +  document.getElementById("snum").value;
  }

  function compare() {
    //initialization of array
    var arr1 = new Array();
    var arr2 = new Array();
    let text1 = document.getElementById("fnum").value ;
    let text2 = document.getElementById("snum").value ;
    let cond = true;

    //for loop
    for(let i = 0; i <text1.length;i++){
      // adding value to array
      arr1.push(text1[i]); 
    }
    for(let i = 0; i <text2.length;i++){
      
      arr2.push(text2[i]); 
    }
    //Conditiona Statements
    if(text1 == "" && text2 == ""){
      document.getElementById("output").value = "no text to compare";
      return;
    }
    else if(text1 == ""){
      document.getElementById("output").value = "first text is empty";
      return;
    }
    else if(text2 == ""){
      document.getElementById("output").value = "second text is empty"
      return;
    }
    else if(text1.length != text2.length){
      document.getElementById("output").value = "uneven text length: FALSE";
      return;
    }
    else{
      for(let i = 0; i <text2.length;i++){
          if(text1[i] != text2[i]){
            document.getElementById("output").value = "Different text: FALSE";
            cond = false;
            break;
          }
      }
      if(cond == true){
        document.getElementById("output").value = "Same Text: TRUE";
      }
    }

  }

