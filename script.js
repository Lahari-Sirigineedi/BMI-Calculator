function computeBMI() {



    var x = (document.getElementById("t1").value);
    var y = (document.getElementById("t21").value);
    var z = (document.getElementById("t22").value);
    if(x==""  || y=="" || z==""){
       alert("Please enter all the fields");
    }

    var weight=parseInt(x);
    var feet=parseInt(y);
    var inch=parseInt(z);


    var height=(feet*12)+inch;
    var result = height*0.025;
    var total = Math.round(weight/(result*result));
    var c = document.getElementById("bmi");
    c.value=total;

    if (c.value >0 && c.value < 18.5) {
    document.getElementById("comment1").innerText = "You are Thin";
    var x = document.getElementById("k1");
      if (x.style.display != "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  } else if (c.value >18.5 && c.value <= 24.9) {
      document.getElementById("comment1").innerText = "You are Healthy";
      var x = document.getElementById("k1");
        if (x.style.display != "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
  }
  else if (c.value >=25 && c.value <= 29.9) {
     document.getElementById("comment").innerText = "Over Weight";
     var x = document.getElementById("k");
       if (x.style.display != "none") {
         x.style.display = "block";
       } else {
         x.style.display = "none";
       }
 }
 else if (c.value >30) {
    document.getElementById("comment").innerText = "Obese";
    var x = document.getElementById("k");
      if (x.style.display != "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}
}
