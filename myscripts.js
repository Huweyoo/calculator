
    // function
    function add() {
    // console log 
    console.log(parseInt(document.getElementById("fnum").value) +  parseInt(document.getElementById("snum").value));
    // operator / output
    document.getElementById("output").value =  parseInt(document.getElementById("fnum").value) +  parseInt(document.getElementById("snum").value);
  }

  function mult() {
    console.log(parseInt(document.getElementById("fnum").value) *  parseInt(document.getElementById("snum").value));
    document.getElementById("output").value =  parseInt(document.getElementById("fnum").value) *  parseInt(document.getElementById("snum").value);
  }

  function diff() {
    console.log(parseInt(document.getElementById("fnum").value) -  parseInt(document.getElementById("snum").value));
    document.getElementById("output").value =  parseInt(document.getElementById("fnum").value) -  parseInt(document.getElementById("snum").value);
  }

  function divide() {
    console.log(parseInt(document.getElementById("fnum").value) /  parseInt(document.getElementById("snum").value));
    document.getElementById("output").value =  parseInt(document.getElementById("fnum").value) /  parseInt(document.getElementById("snum").value);
  }